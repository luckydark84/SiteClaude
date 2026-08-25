# Guide de personnalisation avant mise en ligne

Tout ce qui doit être remplacé par vos vraies informations est balisé dans le
code par un commentaire `TODO-PERSO` (recherchez ce mot dans les fichiers) et,
sur la page mentions légales, par des pastilles jaunes `[à compléter]`.

## 1. Formulaire de contact (5 minutes)

Le formulaire fonctionne déjà en mode « ouverture du client mail ». Pour
recevoir les messages directement (recommandé — beaucoup de visiteurs n'ont
pas de client mail configuré) :

1. Créez un compte gratuit sur [formspree.io](https://formspree.io)
   (50 messages/mois gratuits) et créez un formulaire pointant vers
   `david@ribeiro-campelo.com`.
2. Copiez l'URL fournie (forme : `https://formspree.io/f/abcdwxyz`).
3. Dans `script.js`, ligne `const FORMSPREE_ENDPOINT = "";`, collez l'URL
   entre les guillemets.

C'est tout : les deux formulaires (accueil + offre 1 000 €) basculent en envoi
direct avec message de confirmation, anti-spam (champ piège `_gotcha`) et
sujet d'email distinct par offre. En cas de panne du service, le visiteur voit
votre email en secours.

Ensuite, complétez la section 4 de `mentions-legales.html` (prestataire de
formulaire) avec Formspree.

## 2. Mentions légales (10 minutes)

Dans `mentions-legales.html`, complétez les pastilles `[à compléter]` :

| Champ | Où le trouver |
|---|---|
| Statut juridique + SIREN | Votre avis de situation INSEE (sirene.fr) |
| Adresse professionnelle | Une domiciliation est acceptée |
| Hébergeur (nom + adresse) | Selon votre choix : Vercel, Netlify, OVH, etc. |
| Prestataire de formulaire | Formspree si activé (section 1 ci-dessus) |
| Date de mise à jour | La date de mise en ligne |

La page indique qu'aucun cookie de suivi n'est utilisé — c'est vrai
aujourd'hui. **Si vous ajoutez un analytics** (Google Analytics, Matomo
hébergé ailleurs…), il faudra un bandeau de consentement et une mise à jour
de la page. Alternative sans bandeau : un outil sans cookie (Plausible,
Simple Analytics, Matomo configuré sans cookie).

## 3. Contenus à remplacer (recherchez `TODO-PERSO`)

### Preuves chiffrées et témoignages — obligatoire avant mise en ligne
- **3 témoignages** (`index.html`) : des modèles. Publier de faux avis est
  interdit (pratique commerciale trompeuse, art. L.121-2 du Code de la
  consommation). Pour en collecter des vrais, posez à vos clients :
  *« Qu'est-ce qui a failli vous faire renoncer, et que s'est-il passé ? »*
- **3 études de cas du portfolio** (`index.html`) : projets, métriques et
  visuels à remplacer par vos vrais projets (captures d'écran dans
  `.case__visual`).
- **4 compteurs de la section chiffres** et **faits de la colonne À propos** :
  à aligner sur votre réalité.
- **Tarif maintenance 90 €/mois** (FAQ + offre 1 000 €) : à confirmer.

### Récit et photo
- **`apropos.html`** : les 3 chapitres et les 4 cartes « Hors écran » sont une
  trame narrative — chaque fait doit devenir authentique (parcours, famille,
  habitudes). Une histoire qui se fissure en appel détruit la confiance.
- **Photo** : remplacez le monogramme « DR » (`.about__photo` dans
  `index.html`) par un vrai portrait. Format conseillé : WebP, ~800 px de
  large, `loading="lazy"`, ratio 4/5.

### Engagements à tenir
Vérifiez que vous tenez réellement : livraison 14 jours / 7 jours (offre
1 000 €), maquette sous 72 h, réponse sous 24 h, appel sous 48 h,
« 2 places ce mois-ci » / « 3 projets par mois » (mettez ces compteurs à jour
chaque mois — une rareté affichée fausse est aussi une pratique trompeuse).

## Vérification finale

```bash
grep -rn "TODO-PERSO" *.html    # doit ne plus rien retourner
grep -n "à compléter" mentions-legales.html
grep -n 'FORMSPREE_ENDPOINT = ""' script.js
```
