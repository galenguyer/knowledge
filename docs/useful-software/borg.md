# borg

Borg is a great backup tool.

Docs: [borgbackup.readthedocs.io/en/stable](https://borgbackup.readthedocs.io/en/stable/)

## Useful commands
### Remove file(s) from history
**Warning: This action is destructive**
```bash
borg recreate --exclude 'file'
```
