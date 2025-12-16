#!/usr/bin/env python3
"""
Script för att skapa iPhone-mockups av app screenshots
Lägger screenshots i realistiska iPhone 14 Pro-ramar
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_iphone_mockup(screenshot_path, output_path):
    """
    Skapar en iPhone mockup av en screenshot
    
    Args:
        screenshot_path: Sökväg till original screenshot
        output_path: Sökväg där mockup ska sparas
    """
    
    # iPhone 14 Pro dimensioner
    DEVICE_WIDTH = 430
    DEVICE_HEIGHT = 932
    
    # Mockup dimensioner (med marginal för skugga)
    MOCKUP_WIDTH = 500
    MOCKUP_HEIGHT = 1020
    
    # Beräkna centrering
    OFFSET_X = (MOCKUP_WIDTH - DEVICE_WIDTH) // 2
    OFFSET_Y = (MOCKUP_HEIGHT - DEVICE_HEIGHT) // 2
    
    # Skapa tom mockup med transparent bakgrund
    mockup = Image.new('RGBA', (MOCKUP_WIDTH, MOCKUP_HEIGHT), (255, 255, 255, 0))
    draw = ImageDraw.Draw(mockup)
    
    # Läs in screenshot
    screenshot = Image.open(screenshot_path)
    
    # Konvertera till RGB om nödvändigt
    if screenshot.mode != 'RGB':
        screenshot = screenshot.convert('RGB')
    
    # Skala screenshot till iPhone-dimensioner (behåll aspect ratio)
    screenshot.thumbnail((DEVICE_WIDTH, DEVICE_HEIGHT), Image.Resampling.LANCZOS)
    
    # Skapa skugga
    shadow = Image.new('RGBA', (DEVICE_WIDTH + 20, DEVICE_HEIGHT + 20), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle(
        [(10, 10), (DEVICE_WIDTH + 10, DEVICE_HEIGHT + 10)],
        radius=40,
        fill=(0, 0, 0, 40)
    )
    
    # Lägg till skugga
    mockup.paste(shadow, (OFFSET_X - 10, OFFSET_Y - 10), shadow)
    
    # Skapa iPhone-ram (rounded rectangle)
    device_bg = Image.new('RGBA', (DEVICE_WIDTH, DEVICE_HEIGHT), (20, 20, 20, 255))
    device_draw = ImageDraw.Draw(device_bg)
    
    # Rita device background med rundade hörn
    device_draw.rounded_rectangle(
        [(0, 0), (DEVICE_WIDTH, DEVICE_HEIGHT)],
        radius=47,
        fill=(20, 20, 20, 255)
    )
    
    # Centrera screenshot på device
    screenshot_x = (DEVICE_WIDTH - screenshot.width) // 2
    screenshot_y = (DEVICE_HEIGHT - screenshot.height) // 2
    
    # Klistra in screenshot på device background
    device_bg.paste(screenshot, (screenshot_x, screenshot_y))
    
    # Klistra in device på mockup
    mockup.paste(device_bg, (OFFSET_X, OFFSET_Y), device_bg)
    
    # Rita Dynamic Island (iPhone 14 Pro)
    island_width = 120
    island_height = 37
    island_x = OFFSET_X + (DEVICE_WIDTH - island_width) // 2
    island_y = OFFSET_Y + 25
    
    draw.rounded_rectangle(
        [(island_x, island_y), (island_x + island_width, island_y + island_height)],
        radius=18,
        fill=(20, 20, 20, 255)
    )
    
    # Spara mockup
    mockup.save(output_path, 'PNG', quality=95)
    print(f"✅ Skapade mockup: {output_path}")


def main():
    """Huvudfunktion"""
    
    # Sökvägar
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    screenshots_dir = os.path.join(project_root, 'public', 'assets', 'flocken', 'screenshots')
    
    # Screenshots att processa (från Downloads-mappen)
    downloads_dir = os.path.join(os.path.expanduser('~'), 'Downloads')
    
    # Mappling av screenshots
    screenshots_map = {
        'flocken_screen_para': 'flocken_para_karta-alla-hundar.png',
        'flocken_screen_passa': 'flocken_passa_lista-personer-som-kan-passa.png',
        'flocken_screen_rasta': 'flocken_rasta_starta-promenad.png',
        'flocken_screen_besoka': 'flocken_besoka_karta-alla.png',
    }
    
    print("🎨 Skapar iPhone mockups...")
    print(f"📁 Screenshots mapp: {screenshots_dir}")
    print()
    
    # Skapa output-mapp om den inte finns
    os.makedirs(screenshots_dir, exist_ok=True)
    
    # Bearbeta varje screenshot
    for input_name, output_name in screenshots_map.items():
        # Leta efter filen i Downloads
        input_path = None
        for ext in ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG']:
            potential_path = os.path.join(downloads_dir, input_name + ext)
            if os.path.exists(potential_path):
                input_path = potential_path
                break
        
        if not input_path:
            print(f"⚠️  Hittade inte: {input_name}")
            continue
        
        output_path = os.path.join(screenshots_dir, output_name)
        
        try:
            create_iphone_mockup(input_path, output_path)
        except Exception as e:
            print(f"❌ Fel vid skapande av {output_name}: {e}")
    
    print()
    print("✨ Klart! iPhone mockups är skapade.")


if __name__ == '__main__':
    main()

