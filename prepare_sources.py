#!/usr/bin/env python3
"""Ricostruisce le tre dispense archiviate in parti per il caricamento GitHub."""
from pathlib import Path
import json, hashlib
root = Path(__file__).resolve().parent
for entry in json.loads((root / 'source-parts/manifest.json').read_text()):
    data = b''.join((root / part).read_bytes() for part in entry['parts'])
    if hashlib.sha256(data).hexdigest() != entry['sha256']:
        raise SystemExit('Integrità non valida: ' + entry['path'])
    target = root / entry['path']
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
    print('Ripristinato: ' + entry['path'])
