# 🎨 Guide de l'interface - Spotlight Search

## 📱 Vue d'ensemble

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    [Fond animé avec étoiles]           │
│                                                         │
│                                                         │
│              ┌─────────────────────────────┐            │
│              │  🔍  Rechercher ou taper... │ ⌘K        │
│              └─────────────────────────────┘            │
│                                                         │
│                                                         │
│              Raccourcis rapides                         │
│              ┌──────┐ ┌──────┐ ┌──────┐               │
│              │  🔍  │ │  ✨  │ │  📧  │               │
│              │Google│ │Gemini│ │Gmail │               │
│              └──────┘ └──────┘ └──────┘               │
│              ┌──────┐ ┌──────┐ ┌──────┐               │
│              │  ▶️  │ │  🐙  │ │  📝  │               │
│              │YouTube│ │GitHub│ │Notion│               │
│              └──────┘ └──────┘ └──────┘               │
│                                                         │
│                                                         │
│              Sites fréquents                            │
│              ┌──────┐ ┌──────┐ ┌──────┐               │
│              │ Site │ │ Site │ │ Site │               │
│              │  1   │ │  2   │ │  3   │               │
│              └──────┘ └──────┘ └──────┘               │
│              ┌──────┐ ┌──────┐ ┌──────┐               │
│              │ Site │ │ Site │ │ Site │               │
│              │  4   │ │  5   │ │  6   │               │
│              └──────┘ └──────┘ └──────┘               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🔍 Barre de recherche

### État normal
```
┌─────────────────────────────────────────────────────┐
│ 🔍  Rechercher ou taper une URL...              ⌘K │
└─────────────────────────────────────────────────────┘
```

### État focus
```
┌─────────────────────────────────────────────────────┐
│ 🔍  Rechercher ou taper une URL...              ⌘K │
├─────────────────────────────────────────────────────┤
│ 🌐  Google.com                                      │
│     google.com                                      │
├─────────────────────────────────────────────────────┤
│ 🔍  Rechercher sur Google                           │
├─────────────────────────────────────────────────────┤
│ ✨  Rechercher sur Gemini                           │
└─────────────────────────────────────────────────────┘
```

### Avec résultats
```
┌─────────────────────────────────────────────────────┐
│ 🔍  test                                        ⌘K │
├─────────────────────────────────────────────────────┤
│ 🌐  Test Site 1                                     │
│     testsite1.com                                   │
├─────────────────────────────────────────────────────┤
│ 🌐  Test Site 2                                     │
│     testsite2.com                                   │
├─────────────────────────────────────────────────────┤
│ 🔍  Rechercher sur Google                           │
├─────────────────────────────────────────────────────┤
│ ✨  Rechercher sur Gemini                           │
└─────────────────────────────────────────────────────┘
```

---

## 🎯 Raccourcis rapides

### Disposition
```
┌──────────────────────────────────────────────────┐
│  Raccourcis rapides                              │
│                                                  │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │  🔍  │  │  ✨  │  │  📧  │  │  ▶️  │        │
│  │Google│  │Gemini│  │Gmail │  │YouTube        │
│  └──────┘  └──────┘  └──────┘  └──────┘        │
│                                                  │
│  ┌──────┐  ┌──────┐                             │
│  │  🐙  │  │  📝  │                             │
│  │GitHub│  │Notion│                             │
│  └──────┘  └──────┘                             │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Interaction
```
Avant le survol:
┌──────┐
│  🔍  │
│Google│
└──────┘

Après le survol:
┌──────┐
│  🔍  │  ← Remonte légèrement
│Google│  ← Fond plus clair
└──────┘  ← Ombre plus prononcée
```

---

## 📊 Sites fréquents

### Disposition
```
┌──────────────────────────────────────────────────┐
│  Sites fréquents                                 │
│                                                  │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ 🌐   │  │ 🌐   │  │ 🌐   │  │ 🌐   │        │
│  │Site 1│  │Site 2│  │Site 3│  │Site 4│        │
│  └──────┘  └──────┘  └──────┘  └──────┘        │
│                                                  │
│  ┌──────┐  ┌──────┐                             │
│  │ 🌐   │  │ 🌐   │                             │
│  │Site 5│  │Site 6│                             │
│  └──────┘  └──────┘                             │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Avec icônes
```
┌──────────────────────────────────────────────────┐
│  Sites fréquents                                 │
│                                                  │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ [G]  │  │ [Y]  │  │ [G]  │  │ [R]  │        │
│  │Google│  │YouTube│ │GitHub│  │Reddit│        │
│  └──────┘  └──────┘  └──────┘  └──────┘        │
│                                                  │
│  ┌──────┐  ┌──────┐                             │
│  │ [S]  │  │ [T]  │                             │
│  │Stack │  │Twitter                             │
│  │Overflow                                       │
│  └──────┘  └──────┘                             │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 🎨 Couleurs et thème

### Palette par défaut
```
Couleur primaire (fond):     #0a0e27 (Bleu très foncé)
Couleur secondaire:          #1a1f3a (Bleu foncé)
Couleur d'accent:            #6366f1 (Indigo)
Texte principal:             #ffffff (Blanc)
Texte secondaire:            #a0aec0 (Gris clair)
Bordure:                     rgba(255,255,255,0.1)
```

### Exemple de personnalisation
```
Thème clair:
--primary-color: #ffffff
--accent-color: #3b82f6

Thème rose:
--primary-color: #1a0033
--accent-color: #d946ef

Thème vert:
--primary-color: #0a2e1a
--accent-color: #10b981
```

---

## ✨ Animations

### Entrée de la page
```
Barre de recherche:    Fade in + Slide up (0.6s)
Raccourcis:            Fade in + Slide up (0.8s)
Sites fréquents:       Fade in + Slide up (1.0s)
```

### Interactions
```
Barre de recherche:
- Focus: Scale 1.02 + Glow
- Résultats: Slide down (0.3s)

Raccourcis:
- Hover: Translate Y -4px + Glow
- Transition: 0.3s cubic-bezier

Sites fréquents:
- Hover: Translate Y -4px + Glow
- Transition: 0.3s cubic-bezier
```

### Fond
```
Gradient:     Brightness shift (15s)
Étoiles:      Twinkle (3s)
```

---

## 📐 Dimensions

### Barre de recherche
```
Largeur:     100% (max 600px)
Hauteur:     48px
Padding:     12px 16px
Border-radius: 12px
```

### Raccourcis
```
Largeur:     80px (min)
Hauteur:     80px
Padding:     16px
Border-radius: 12px
Gap:         12px
```

### Sites fréquents
```
Largeur:     100px (min)
Hauteur:     100px
Padding:     16px
Border-radius: 12px
Gap:         12px
```

---

## 🔤 Typographie

### Polices
```
Famille:     -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
Fallback:    Sans-serif
```

### Tailles
```
Titre section:       14px (uppercase)
Texte principal:     16px
Texte secondaire:    12px
Icône raccourci:     32px
Icône site:          24px
```

---

## 📱 Responsive

### Desktop (> 768px)
```
Grille raccourcis:   6 colonnes
Grille sites:        6 colonnes
Largeur max:         600px
```

### Tablet (768px)
```
Grille raccourcis:   4 colonnes
Grille sites:        4 colonnes
Largeur max:         500px
```

### Mobile (< 480px)
```
Grille raccourcis:   3 colonnes
Grille sites:        3 colonnes
Largeur max:         100%
```

---

## 🎯 États des éléments

### Barre de recherche
```
Normal:      Fond transparent, bordure grise
Focus:       Fond clair, bordure indigo, glow
Typing:      Fond clair, bordure indigo
```

### Raccourcis
```
Normal:      Fond transparent, bordure grise
Hover:       Fond indigo clair, bordure indigo, remontée
Active:      Fond indigo, texte blanc
```

### Sites fréquents
```
Normal:      Fond transparent, bordure grise
Hover:       Fond indigo clair, bordure indigo, remontée
Loading:     Placeholder gris
```

---

## 🎬 Transitions

```
Rapide:      0.1s - 0.2s (interactions rapides)
Normal:      0.3s - 0.5s (animations principales)
Lent:        1.0s - 3.0s (animations de fond)
```

Bon design ! 🎨

