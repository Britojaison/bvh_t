import os

path = 'src/data/pharma-trials.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix weird characters
content = content.replace('Â“', '"')
content = content.replace('Â”', '"')
content = content.replace('Â®', '®')
content = content.replace('Â', '')
# Handle escaped versions if any
content = content.replace('\\u00c2\\u0093', '"')
content = content.replace('\\u00c2\\u0094', '"')
content = content.replace('\\u00c2\\u00ae', '®')
content = content.replace('\\u00c2', '')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Final cleanup complete.")
