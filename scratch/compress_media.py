import os
import shutil
from PIL import Image

MAX_DIM = 1920
JPEG_QUALITY = 82

def get_dir_size(path):
    total = 0
    for root, _, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            if os.path.isfile(fp):
                total += os.path.getsize(fp)
    return total

def compress_image(file_path):
    ext = os.path.splitext(file_path)[1].lower()
    orig_size = os.path.getsize(file_path)
    
    try:
        with Image.open(file_path) as img:
            # Check if resizing is needed
            w, h = img.size
            if max(w, h) > MAX_DIM:
                if w >= h:
                    new_w = MAX_DIM
                    new_h = int(h * (MAX_DIM / w))
                else:
                    new_h = MAX_DIM
                    new_w = int(w * (MAX_DIM / h))
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            if ext in ['.jpg', '.jpeg']:
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                img.save(file_path, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)
            elif ext == '.png':
                # Check if PNG has alpha channel
                if img.mode == 'RGBA':
                    # Compress RGBA PNG
                    img.save(file_path, 'PNG', optimize=True)
                elif img.mode == 'P':
                    img.save(file_path, 'PNG', optimize=True)
                else:
                    # Convert RGB PNG (photos saved as PNG) to PNG optimized
                    img.save(file_path, 'PNG', optimize=True)
            elif ext == '.webp':
                img.save(file_path, 'WEBP', quality=JPEG_QUALITY, optimize=True)
                
        new_size = os.path.getsize(file_path)
        saved = orig_size - new_size
        return orig_size, new_size, saved
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return orig_size, orig_size, 0

def main():
    target_dir = './public'
    initial_total_size = get_dir_size(target_dir)
    print(f"Starting compression. Initial public/ directory size: {initial_total_size / (1024*1024):.2f} MB\n")
    
    total_saved = 0
    file_count = 0
    
    # Process images
    for root, dirs, files in os.walk(target_dir):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in ['.jpg', '.jpeg', '.png', '.webp']:
                file_path = os.path.join(root, file)
                orig, new_sz, saved = compress_image(file_path)
                total_saved += saved
                file_count += 1
                if orig > 500 * 1024:  # Print for files > 500KB
                    pct = (saved / orig) * 100 if orig > 0 else 0
                    print(f"Compressed {file_path}: {orig/(1024*1024):.2f}MB -> {new_sz/(1024*1024):.2f}MB (-{pct:.1f}%)")
                    
    # Clean unused public/Brochure folder if present
    brochure_dir = './public/Brochure'
    if os.path.exists(brochure_dir):
        b_size = get_dir_size(brochure_dir)
        shutil.rmtree(brochure_dir)
        print(f"\nRemoved unused directory {brochure_dir} ({b_size / (1024*1024):.2f} MB freed)")
        total_saved += b_size
        
    final_total_size = get_dir_size(target_dir)
    print(f"\n==========================================")
    print(f"Processed {file_count} image files.")
    print(f"Final public/ directory size: {final_total_size / (1024*1024):.2f} MB")
    print(f"Total space saved: {total_saved / (1024*1024):.2f} MB ({(total_saved/initial_total_size)*100:.1f}% reduction)")
    print(f"==========================================")

if __name__ == '__main__':
    main()
