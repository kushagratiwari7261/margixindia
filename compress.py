import os
from PIL import Image
import glob

def compress_images(directory):
    for filepath in glob.glob(os.path.join(directory, '**', '*.*'), recursive=True):
        ext = filepath.lower().split('.')[-1]
        if ext in ['jpg', 'jpeg', 'png']:
            try:
                print(f"Compressing {filepath}...")
                img = Image.open(filepath)
                # Convert to RGB if PNG with transparency to save as JPEG/WebP or just save as low quality JPEG
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                
                # Resize if it's very large
                max_size = 1280
                if img.width > max_size or img.height > max_size:
                    img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                
                # Overwrite the original file with heavily compressed version
                img.save(filepath, quality=30, optimize=True)
                print(f"Success: {filepath}")
            except Exception as e:
                print(f"Failed {filepath}: {e}")

compress_images(r"d:\Margix-main\public")
compress_images(r"d:\Margix-main\src\assets")
