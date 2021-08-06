
set -eux

cp -r import_asster/* /asset-output
pip install -r requirements.txt --target /asset-output
