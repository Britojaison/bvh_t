import os
import re

path = 'src/data/pharma-trials.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# The problem is lines like: "title": "- "A Multi center...""
# We need to escape double quotes that are NOT at the start/end of a value or key.

# A better way: find the JSON array part, parse it as JSON after fixing the bad quotes, then re-dump it.
# But fixing "bad quotes" is hard without a parser.

# Let's try a regex approach to find quotes within "title": "..."
def escape_internal_quotes(match):
    key_part = match.group(1) # e.g. "title": "
    value_part = match.group(2) # e.g. - "A Multi center..."
    # Escape all double quotes in value_part
    escaped_value = value_part.replace('"', '\\"')
    return f'{key_part}{escaped_value}"'

# This regex looks for "key": "value" patterns
# It's a bit greedy, so we'll be careful.
# Actually, let's just fix the specific cases of Â“ and Â” properly this time.

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# First, undo the damage if possible, or just fix it.
# We want Â“ and Â” to become \"
content = content.replace('Â“', '\\"')
content = content.replace('Â”', '\\"')
content = content.replace('Â®', '®')

# Now fix the ones I already broke (raw quotes inside strings)
# This is tricky. Let's look at the patterns.
# "title": "- "A Multi center...""
# We can search for quotes that are preceded by a non-colon-space or non-comma-newline.

# Actually, I'll just use a more robust replacement for the common patterns.
content = content.replace('": "- "', '": "- \\"')
# Wait, that's too specific.

# Let's try this:
# If we have "title": " ... " ... " , the middle one should be escaped.
# We can use json.loads on individual lines if they were simple, but they are not.

# HOW ABOUT THIS:
# I will RE-RUN the merge_pharma_data.py script but with a better clean_text function.
