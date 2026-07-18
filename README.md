# Sans Frontière — site vitrine

Site statique en français pour **Sans Frontière**, un service de lavage mobile pour autos, motos et tapis.

## Pourquoi le site peut sembler ne pas fonctionner ?

Ce projet est un site statique : il n'a pas de serveur applicatif, de backend ou de formulaire connecté à une base de données. Pour le voir correctement, il faut ouvrir `index.html` dans un navigateur ou lancer un petit serveur local.

Les images sont chargées depuis Unsplash. Elles peuvent ne pas apparaître si l'ordinateur n'a pas Internet ou si le réseau bloque les images externes.

## Lancer l'aperçu local

```bash
npm start
```

Puis ouvrir : <http://127.0.0.1:4173>

Commande équivalente sans npm :

```bash
python3 -m http.server 4173
```

## Vérifier le site

```bash
npm test
```

Ce contrôle vérifie que les fichiers principaux existent et que les sections importantes du site sont présentes.
