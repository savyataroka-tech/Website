import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'velvet-matte-lipstick',
    name: 'Savyata Velvet Matte Lipstick',
    subtitle: 'Infused with Himalayan botanical extracts',
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviewCount: 128,
    category: 'Lips',
    badge: 'Bestseller',
    isBestSeller: true,
    isNewArrival: false,
    skinType: ['Dry', 'Oily', 'Combination', 'Sensitive', 'All'],
    finish: 'Matte',
    shortDescription: 'Long-lasting matte color with a lightweight, comfortable finish.',
    description: 'Experience the ultimate in matte lip color. The Savyata Velvet Matte Lipstick delivers an intensely pigmented, shine-free finish that feels remarkably weightless. Enriched with nourishing oils native to the Himalayas, it prevents drying while ensuring lasting wear throughout your day.',
    features: [
      'Weightless, non-drying velvety matte finish',
      'Infused with Seabuckthorn oil and Wild Himalayan Rosehip extract',
      'Full-coverage, rich pigmentation in a single glide',
      'Comfortable 10-hour transfer-resistant wear',
      '100% Vegan & Cruelty-Free certified'
    ],
    howToUse: 'Glide directly onto clean, exfoliated lips starting from the Cupid’s bow outward. For a softer blurred look, gently dab with fingertips.',
    ingredients: 'Dimethicone, Isododecane, Polyglyceryl-2 Triisostearate, Hippophae Rhamnoides (Seabuckthorn) Kernel Oil, Rosa Canina (Himalayan Rosehip) Fruit Extract, Silica, Tocopherol (Vitamin E), Iron Oxides (CI 77491, CI 77492, CI 77499), Red 7 Lake (CI 15850).',
    shippingInfo: 'Standard Delivery: 2-3 working days within Kathmandu Valley; 3-5 days across all 7 provinces of Nepal. Free delivery on orders over Rs. 2,500.',
    shades: [
      { id: 'rose', name: 'Rosé', hex: '#D48A8A' },
      { id: 'nude-dream', name: 'Nude Dream', hex: '#D7A99C' },
      { id: 'cherry', name: 'Cherry', hex: '#8B2032' },
      { id: 'mocha', name: 'Mocha', hex: '#7B524E' },
      { id: 'himalayan-rose', name: 'Himalayan Rose', hex: '#A05252' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-fpef3EDvhD6j2rp0jU5uHQs8heMaOiNGJhsM0PQG0OhA9sJOkmy_nsuQWur29N7a6RbkdCCgy7gO5mkWgmK6UPQgIGYEGoLWoTLW809vjK3IM1GyLBIOrmnxZ9ieMyiIT4Ff3Zw0rd2zTyaz4l9L_k47VaNd7ikgF97NP-9lecRyZb_LO4OIeUrzXiSYCcB5Lx-Yw7TmsflNINP4L0tgeDY3-7h1oQ8YMIDGecU-PyWA5OdLakfj',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDerH1qwc7AGFWgznEFboWZx-ncUY0s6hRi4tjjwKL6kgV7SkeLp23Jon6Q8WzVefqU15wNOBTXwL_7ZFwnXAqyytKXvaIEhdafZdhjVxPDMAiUiUq4Ce4nfiLY5-DauuPuQzjqZQJJNnekIhXcG8Qprm7LWTgKAwVfwb2Aje43bZtf65ue8nIc5jikTkmMPkoZUx6_0ZP9v3af9R9JX1DC5Talw2pHxnRUTit3V3YpXjvkq72wvtn',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtbG6xv5Vcn3JrJ9FX3bdYTxEq_IVohXwE-XCh5YHDJv3Br56pKIBCsIc2v3EYyG4Cmpt1_8afhuhiK7-IzqwHSSJwAxfgEzVbBl-6N7ip1MSk36t71EABAkXm5V9SkV6x-N-wv-wd6Zw2g48vjDrtIMILdc7nK_jdXuVef7WuHXg10M-r06iLR_SclFjjKQUJR2B9OJ1YHDra6JI2C1Aob1QFahaX1CkIM5jrLkXWz_ZCweSxt6vf',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbtmUXsjx9mkjCX31Xf_T-pOmKqMMBYhPHey_FxIF7MsZC_BgFgfBolAAgW_L7HeMdSa7GtjMnv6iN1cx8HTPzvV2pQfynzv35DS_UaBtP8VePl7Qedp_qEmCdwZhZM-JsxI1tHiuQoGnUYYBebWIrgssNxLh8mphmVtbF6IIKxaE_1Q3yq6ozvkxiZCm03C0m3ikxO2KBcLqsfKj5MU4z5Qd7wvuy5GTKAw9ZkIgIItXsVpPDDCSt',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzUbw53n0XYbWcehpzrcUBSpn1nW18i8oefflOUh_8nSQnqXRTyV_-WJzaA63FESjT2Trb3zSNluqlIS1of4iUVgQxxmbfaJC4BJpbowleYKZjU_nNC8OWDSFJIoA2vvC73EqUeigsqmwae5ziklPepisvnB8ijmMuD3szibMemdfY6UQKMEd4Dyg_Nn9cAxeBaCLONpFvuSrwxpJAZkUfHeUZkTH5kGP7zA3IGx10DESCk41Td06D'
    ]
  },
  {
    id: 'glass-shine-lip-gloss',
    name: 'Savyata Glass Shine Lip Gloss',
    subtitle: 'Juicy, non-sticky high-gloss nourishment',
    price: 999,
    originalPrice: 1199,
    rating: 4.8,
    reviewCount: 512,
    category: 'Lips',
    badge: 'Trending',
    isBestSeller: true,
    isNewArrival: false,
    skinType: ['Dry', 'Oily', 'Combination', 'Sensitive', 'All'],
    finish: 'Dewy',
    shortDescription: 'Pristine glass shine with lightweight hydration and cushiony feel.',
    description: 'Achieve the mirror-like glass lips of your dreams with Savyata Glass Shine Lip Gloss. Our plush, non-sticky formula wraps your lips in hydrating nourishment while delivering a wet, crystal-sheen finish that visually plumps and smooths fine lip lines.',
    features: [
      'High-refraction mirror shine finish with zero stickiness',
      'Infused with Hyaluronic Acid and Himalayan Honey extract',
      'Large doe-foot wand hugs contours for easy one-swipe application',
      'Delicate, natural vanilla aroma'
    ],
    howToUse: 'Swipe across bare lips for a juicy, natural shine or layer on top of Savyata Velvet Matte Lipstick for high-octane dimensional gloss.',
    ingredients: 'Polybutene, Octyldodecanol, Hydrogenated Polyisobutene, Ricinus Communis Seed Oil, Sodium Hyaluronate, Mel (Himalayan Wild Honey) Extract, Flavor, Mica, Titanium Dioxide (CI 77891).',
    shippingInfo: 'Standard Delivery: 2-3 working days within Kathmandu Valley; 3-5 days across Nepal.',
    shades: [
      { id: 'crystal-dew', name: 'Crystal Dew', hex: '#FAD1D1' },
      { id: 'peach-nectar', name: 'Peach Nectar', hex: '#E2B2A3' },
      { id: 'berry-glaze', name: 'Berry Glaze', hex: '#B57777' },
      { id: 'golden-hour', name: 'Golden Hour', hex: '#EFCBBA' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDos8rhWkUh9g4q-BovHYztjqohoGeWdIH573c85-4bfcJHDxvKYID7g4LZ7pK_PhNKosEX5I2kqtg8WXbef98m54s9N8bkZfrDUS87u9PpAMkQ8RT4DZlMFnVabQWldhYIE4eX4dip95mkogAjgy2dI5z-Poh9b25vrVu-NdUYzHkoLIbZvpIebL5I-SjjRyAKiBKM5AiXM6Jb6mJp3Z5UemTe1roy1nn-kGFjHtx8MFCSeX7soeTG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZOLlfcINEktzafKVryNcvBK84qADKkYRVzPuOVKtNmFPP1ywS_80ZNfLObQHoWU2H0DYhrCSNHiy04tUN5sQbP2nTxDh-ecmXrrDUriGpsL2ZRaw1x5O04uZB56cWjDX3DURGLBt5mrFOzQdP7qW3SnLF_hW1bA4I-QXruNqMcZmzPGm0Cs6tT0c0gobr8Hygss-nhcfqSC6MDpNwLSbVPWrl14CjpPQ8RdMvxFEspc942McpWqo'
    ]
  },
  {
    id: 'cloud-blush',
    name: 'Savyata Cloud Blush',
    subtitle: 'Air-whipped cream-to-powder blush',
    price: 1199,
    originalPrice: 1350,
    rating: 5.0,
    reviewCount: 89,
    category: 'Blush',
    badge: 'New',
    isBestSeller: true,
    isNewArrival: true,
    skinType: ['Dry', 'Combination', 'Sensitive', 'All'],
    finish: 'Satin',
    shortDescription: 'Seamless cream-to-powder formula that gives a lit-from-within glow.',
    description: 'A luxurious, cloud-whipped blush that melts effortlessly into the skin. Blends seamlessly with fingers, brush, or sponge for a natural, diffused wash of color that never emphasizes skin texture or settles into fine lines.',
    features: [
      'Bouncy, weightless cloud cream-to-powder texture',
      'Buildable pigmentation from subtle day tint to rich evening flush',
      'Enriched with Camellia Seed Oil and Himalayan Edelweiss extract',
      'Sweat-resistant, all-day radiant flush'
    ],
    howToUse: 'Dab a small amount onto the apples of your cheeks using fingertips or a dense blush brush. Blend upward toward temples for a lifted effect.',
    ingredients: 'Caprylic/Capric Triglyceride, Dimethicone Crosspolymer, Leontopodium Alpinum (Edelweiss) Extract, Camellia Japonica Seed Oil, Synthetic Fluorphlogopite, Tin Oxide, Iron Oxides (CI 77491, CI 77499).',
    shippingInfo: 'Standard Delivery: 2-3 working days within Kathmandu Valley; 3-5 days across Nepal.',
    shades: [
      { id: 'dawn-flush', name: 'Dawn Flush', hex: '#E6A89C' },
      { id: 'rose-petal', name: 'Rose Petal', hex: '#DDA2B4' },
      { id: 'terracotta-sun', name: 'Terracotta Sun', hex: '#C67B6E' },
      { id: 'berry-mist', name: 'Berry Mist', hex: '#B25D6B' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATm93u2DdhWEC1092ABX19MwFSB0M1Rg_UuIchUFr-wdN6L1pSwpCeusZsnLxdSSe80o0fnZWILXRXPLJ8f5DDKkR7ya7yeO77z-6b23L3mX1ZpqHHchKeTJ4GiNCmHf7EJkUIBPrb8KrTKVC-4QC6Pjpb1ZI1W4eVriEUYe11aRaWb8LFIHEvAPMV328g06203Jfi6_JloP5UoB_j16wjrZIFZ8iTNk55LG38pHE6ENQ__oPIwSgt',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXlntZTl-k3ALvktRhAXWMVx1Nkzq5LQRXbSsnGOqw88BhVr__R21OD4hzweOCxZwH539RoCODrtnUJJ4LUibyaz6YNxBDxjlpgKhwZ5t3QvburB69jvL_u8cWKlwAgmrltxWKLWN1EJoxgptDQzJUt5m9NZwf3y4892TNKOh7xcmSJ0oIQ9naecNW_QF6JBVfHfJ-UVaoZQucb2U3E1OGZQl6zfLvjddkUx46fX6NtlM87CfTRFpL',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBk7hnMCKUekyip6BZB3y7Q6ux3ObfAuNK9hqaKrtrQ6b1aaGKXGB6gMiYtL8mKcCG2vjQFiGqRd8FxFtu_6OFwOb2_9zRVTHpbxm9RZTdJIuDi4mg3Sm3DIU-8UumiF3CtEnLgOn7D-Kad7MP5VYzFqDcquHzDHyiza2oZiJna0B27usEJzFoGNRILePQqo4_APsjTxdujwZpeapFbNiMCa0_UHhCLFPBpmDP4DJs04AZy7tFGffa5'
    ]
  },
  {
    id: 'glow-highlighter',
    name: 'Savyata Glow Highlighter',
    subtitle: 'Luminous liquid glow with champagne undertones',
    price: 1399,
    originalPrice: 1600,
    rating: 4.7,
    reviewCount: 45,
    category: 'Highlighter',
    badge: 'Trending',
    isBestSeller: true,
    isNewArrival: false,
    skinType: ['Dry', 'Oily', 'Combination', 'Sensitive', 'All'],
    finish: 'Radiant',
    shortDescription: 'Liquid elixir that creates a dewy, lit-from-within glow without glitter.',
    description: 'An ultra-refined liquid highlighter with micro-fine pearls that reflect light for a glass-skin, dewy radiance. Seamlessly blends over foundation or bare skin without disturbing base makeup.',
    features: [
      'Ultra-fine light-refracting pearls with no chalky residue or glitter chunks',
      'Customizable dropper dispenser for precise application',
      'Can be mixed with moisturizer, primer, or foundation for an all-over luminous sheen',
      'Packed with antioxidant-rich Green Tea and Squalane'
    ],
    howToUse: 'Dot onto high points of cheekbones, bridge of the nose, and Cupid’s bow, then pat gently with fingers or a damp sponge.',
    ingredients: 'Isododecane, Mica, Hydrogenated Polydecene, Squalane, Camellia Sinensis (Green Tea) Leaf Extract, Tocopherol, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491).',
    shippingInfo: 'Standard Delivery: 2-3 working days within Kathmandu Valley; 3-5 days across Nepal.',
    shades: [
      { id: 'champagne-gold', name: 'Champagne Gold', hex: '#F4E1C1' },
      { id: 'rose-quartz', name: 'Rose Quartz', hex: '#E2BBAA' },
      { id: 'bronze-sun', name: 'Bronze Sun', hex: '#D29E7A' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB44Lvb3heA4GEhF7pP0pU3tmuHB7AMKpUiGlVsUZdMCKFwSOdDpBqqlBTAI40lcYIl453FjgZ0tpO7U40ZE3Aez_SsjElZ9fvVClAx5XWXU7ZQ0sz0CBMAPHZ74g-uaIraveLmFGwFTcebrn7m1cqAYhl6mvTlTbRzbNn-CtD2Z5Ymhn3_k7bTignzfvYlCf3qLETyzmPKblpKVrWo1a2klfAwF_zU_cNjwp27gRfEZTqckf46oz4G',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA967k9ES45QjDgEAfJfxtiFLH-lPrweiiRckfc3JckC72uqB54mrT6nkjwqNwhwAM8FgizPwHhDpLXHG9Rq8Y6iQuzdjrrRTcNqew8CSCl08aRjz--qGtQQVtx2fcgQKr91lv2NaLcXUvF2y30VnBJERua_VYg-3fZKS76R0WGKYa31zxcOoi4jMmeALREC9qicGh4xq3_SILxaK4yEtxnk_dUmEniUrUAeqgiHJ-hfTY7DzqurTZn'
    ]
  },
  {
    id: 'skin-tint',
    name: 'Savyata Skin Tint',
    subtitle: 'Breathable, ultra-lightweight natural radiance SPF 30',
    price: 1799,
    originalPrice: 2100,
    rating: 4.9,
    reviewCount: 210,
    category: 'Face',
    badge: 'New',
    isBestSeller: true,
    isNewArrival: true,
    skinType: ['Dry', 'Combination', 'Sensitive', 'All'],
    finish: 'Natural',
    shortDescription: 'Breathable, skin-like tint with buildable sheer-to-medium coverage.',
    description: 'A breathable, ultra-lightweight formula that blurs imperfections while letting your natural radiance shine through. Infused with Himalayan botanicals for all-day hydration and broad-spectrum mineral protection.',
    features: [
      'Buildable sheer-to-medium coverage with a second-skin finish',
      'Infused with Himalayan Rhododendron extract, Hyaluronic Acid, and Niacinamide',
      'Non-comedogenic, won’t clog pores or emphasize dry patches',
      'SPF 30 Broad Spectrum UV protection'
    ],
    howToUse: 'Shake well. Dispense 3-4 drops onto palms or back of hand. Blend onto face using fingers, starting at the center and working outward.',
    ingredients: 'Aqua/Water, Cyclopentasiloxane, Ethylhexyl Methoxycinnamate, Zinc Oxide, Niacinamide, Rhododendron Arboreum Extract, Sodium Hyaluronate, Glycerin, Titanium Dioxide (CI 77891), Iron Oxides.',
    shippingInfo: 'Standard Delivery: 2-3 working days within Kathmandu Valley; 3-5 days across Nepal.',
    shades: [
      { id: 'fair-01', name: 'Fair 01 (Porcelain)', hex: '#F8E5D6' },
      { id: 'light-02', name: 'Light 02 (Ivory)', hex: '#EFCBBA' },
      { id: 'medium-03', name: 'Medium 03 (Warm Honey)', hex: '#DCA58B' },
      { id: 'tan-04', name: 'Tan 04 (Golden Tan)', hex: '#C18868' },
      { id: 'deep-05', name: 'Deep 05 (Warm Mocha)', hex: '#8F583B' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCxWDgeFR5pR1oQ2mTqwZa11PR2DhDsextq4YBKLFPARy6SIGiBKmC6jg4l_Xbr3iSAht-lEVqRJ-3Plt534T9HM6kRngs7JlNgaUMVMXV9htCoA2n9WaKFkkb6Tc6GNDFI49rDtQ40cBb08A3Wtjk-WW4ZKEZgml5F6Jlmg3Xonpn6XhRczqnAMAt_gBgJn87Xh1mHZ-jcyA9xyLuUwshqav5HMCOS7ZfReXPATz9bD_bC77rSvH2b',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQyfpG5oJPxmge6POKpHzBMOvGOZIRkMw4bahBuVkW34YmlanzLXt6AZSduS3xenR7ugpsYTlOjNKZdZQrh_JjI5Lg6KRpOCSWibJdmWcu0oB2cBFM3O2TzLATtbVyYnt5UG_FHA0_YkpTUv7KGFV6JrhMj-fTDhw1OGua5tgIc9BDFcVZl-RZImPpdexeIlUTsK7Aj17vXNdnPOZl1Mxe9o9URZQY3fGs7w7DgUndxErFgw-uKP4B'
    ]
  },
  {
    id: 'lash-lift-mascara',
    name: 'Savyata Lash Lift Mascara',
    subtitle: 'Dramatic curl, clean separation & smudge-free volume',
    price: 1099,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 94,
    category: 'Eyes',
    badge: 'Bestseller',
    isBestSeller: false,
    isNewArrival: true,
    skinType: ['Sensitive', 'All'],
    finish: 'Natural',
    shortDescription: 'Featherlight fiber mascara providing sky-high lift and clump-free length.',
    description: 'Elevate your lash game with Savyata Lash Lift Mascara. Engineered with a precision curved silicone wand that grips every single lash from root to tip, creating smudge-resistant volume and sky-high lift that lasts through humidity and rain.',
    features: [
      'Smudge-proof & humidity-resistant 16-hour wear',
      'Precision curved brush coats even the smallest corner lashes',
      'Infused with Castor Oil and Vitamin B5 (Panthenol) to condition lashes',
      'Easy removal with warm water and gentle cleanser'
    ],
    howToUse: 'Position wand at the base of your upper lashes and wiggle gently as you pull upward through the tips. Layer for more dramatic evening volume.',
    ingredients: 'Water/Aqua, Acrylates Copolymer, Beeswax/Cera Alba, Ricinus Communis (Castor) Seed Oil, Panthenol, Stearic Acid, Copernicia Cerifera Cera, Iron Oxides (CI 77499).',
    shippingInfo: 'Standard Delivery: 2-3 working days within Kathmandu Valley; 3-5 days across Nepal.',
    shades: [
      { id: 'jet-black', name: 'Midnight Jet Black', hex: '#111111' },
      { id: 'espresso-brown', name: 'Espresso Brown', hex: '#3B2F2F' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDc_D7HPE4pajnZxo2KQoWhgpRANBGmY5dn2fZXTgcAimqD3vyt20u1Sqx6ZA4AvXNv063VxNjwz9CuwJMfyHPtRoZCHautOnJuwiL32fGtCUnXFn3VjRX9YO8XwZc1jvsZTxkkHVdr2-0xHD39qTeXwRyhAwUOsiFqQKA26ZI8rL6unC_lb_e9wdz8PRWKYq_530AJa_MpjRMg-FXMPj7g3_CQIV_K2fUNccjT4hh1GVR8g_HQBtsB'
    ]
  },
  {
    id: 'himalayan-eyeshadow-palette',
    name: 'Savyata Himalayan Sunset Eyeshadow',
    subtitle: '9-Pan Velvety Matte & Luminous Shimmer Palette',
    price: 2499,
    originalPrice: 2800,
    rating: 4.9,
    reviewCount: 76,
    category: 'Eyes',
    badge: 'Vegan',
    isBestSeller: false,
    isNewArrival: false,
    skinType: ['All'],
    finish: 'Satin',
    shortDescription: 'Nine curated buttery mattes, molten metallics, and silk satins.',
    description: 'Inspired by golden hour over the Annapurna peaks. A versatile 9-pan palette featuring richly pigmented neutral tones, rosy terracottas, and radiant champagne shimmers that blend like butter with zero fallout.',
    features: [
      '9 ultra-pigmented neutral and warm sunset shades',
      'Ultra-fine, triple-milled powders for seamless blending',
      'Includes built-in vanity mirror for on-the-go touchups',
      'Talc-free and cruelty-free formulation'
    ],
    howToUse: 'Use a fluffy brush to blend matte shades into the crease. Press shimmer and metallic pigments onto center of lid with fingertips for maximum metallic impact.',
    ingredients: 'Mica, Synthetic Fluorphlogopite, Zinc Stearate, Caprylic/Capric Triglyceride, Squalane, Silica, Tocopherol, Iron Oxides (CI 77491, CI 77492, CI 77499).',
    shippingInfo: 'Standard Delivery: 2-3 working days within Kathmandu Valley; 3-5 days across Nepal.',
    shades: [
      { id: 'palette-sunset', name: '9-Shade Himalayan Palette', hex: '#C4826F' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4diRQzvwhJ1kUiltkVSY7Vy3mbXnUnxUPIfIuhYAvoNACRMnsupsYUYvbwRaHmH__AbPDobERJ5oHyTOKKHHw7OLWJ3kceZDkUIzP2IXCqNifcsnQ5S-tXkDBSO77iUIlde0RN2mwM4YjMA7AlcvJKtcZ5AVYseOrA1oYp3VMPV-g_8jHwzIqV1XmsX9Flvxd8OUHWzvIVvfiFTSLHfX5hTpTC_onXzh8nkRuwZT5zbVeinF09EKC'
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'Lips',
    name: 'Lipsticks & Gloss',
    shortName: 'LIPSTICKS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg7d4T2RTh_0kcHXg-L0XB03YaFvNvEwOYggzL5jJhPFYZyRlBPHzO0QMfyFiB72wfIms_OAl9f2xfcsBS-oDdzBgMm96mwYOMpqtZPkdoQhRi5y8_HeOV8Fv8nnzn8xQbEokQPtJBHC6ZSjGPjkFKp_hZJ8JdcUaQ3AYjhvI8cdabvGZxcYLhd5qP44OurE3B24z7ogxOKZoLb09aH26QHpDEFDkVhTOeYDeP24MU--Q8QVIz-D40'
  },
  {
    id: 'Blush',
    name: 'Cloud Cream Blush',
    shortName: 'BLUSH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk7hnMCKUekyip6BZB3y7Q6ux3ObfAuNK9hqaKrtrQ6b1aaGKXGB6gMiYtL8mKcCG2vjQFiGqRd8FxFtu_6OFwOb2_9zRVTHpbxm9RZTdJIuDi4mg3Sm3DIU-8UumiF3CtEnLgOn7D-Kad7MP5VYzFqDcquHzDHyiza2oZiJna0B27usEJzFoGNRILePQqo4_APsjTxdujwZpeapFbNiMCa0_UHhCLFPBpmDP4DJs04AZy7tFGffa5'
  },
  {
    id: 'Highlighter',
    name: 'Liquid Glow Highlighter',
    shortName: 'HIGHLIGHTER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA967k9ES45QjDgEAfJfxtiFLH-lPrweiiRckfc3JckC72uqB54mrT6nkjwqNwhwAM8FgizPwHhDpLXHG9Rq8Y6iQuzdjrrRTcNqew8CSCl08aRjz--qGtQQVtx2fcgQKr91lv2NaLcXUvF2y30VnBJERua_VYg-3fZKS76R0WGKYa31zxcOoi4jMmeALREC9qicGh4xq3_SILxaK4yEtxnk_dUmEniUrUAeqgiHJ-hfTY7DzqurTZn'
  },
  {
    id: 'Eyes',
    name: 'Eyeshadow & Mascara',
    shortName: 'EYESHADOW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4diRQzvwhJ1kUiltkVSY7Vy3mbXnUnxUPIfIuhYAvoNACRMnsupsYUYvbwRaHmH__AbPDobERJ5oHyTOKKHHw7OLWJ3kceZDkUIzP2IXCqNifcsnQ5S-tXkDBSO77iUIlde0RN2mwM4YjMA7AlcvJKtcZ5AVYseOrA1oYp3VMPV-g_8jHwzIqV1XmsX9Flvxd8OUHWzvIVvfiFTSLHfX5hTpTC_onXzh8nkRuwZT5zbVeinF09EKC'
  }
];

export const REVIEWS = [
  {
    id: 'r1',
    initial: 'A',
    author: 'Aastha',
    role: 'Verified Buyer',
    rating: 5,
    text: '“The Velvet Matte Lipstick is incredible. It stays on all day without drying out my lips. Finally found my perfect everyday shade!”'
  },
  {
    id: 'r2',
    initial: 'R',
    author: 'Riya',
    role: 'Verified Buyer',
    rating: 5,
    text: '“I\'m obsessed with the Cloud Blush. It blends so seamlessly and gives that perfect lit-from-within glow. Highly recommend!”'
  },
  {
    id: 'r3',
    initial: 'S',
    author: 'Srijana',
    role: 'Verified Buyer',
    rating: 5,
    text: '“The new Skin Tint is a game changer for my morning routine. Lightweight but gives just enough coverage to look polished.”'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBojqOuxICkRNSbB_gPe42VXc2g1J8RdACKxDYUe3P7Yawo_1ju9WWioDnWckvcbMAB3tSw_OsLqPtj5zU9pVHChGU0YM2YwQFQWJ9T_3Krr-ZjVVNnGYxJVU3Ipuri3BJrajjTS1XiFzMuG_DuvsuQlKA5Pm_hzkYXa7KBgakh113TmSdjLzYX9njyhrBVXkzL3NqCUK54UWEG29yYfQsdaDF2o5QASG01_rkqRGfTESbbHoh51OD',
    alt: 'Applying Savyata lipstick in a sunlit Kathmandu café'
  },
  {
    id: 'ig2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACW2dXct7GBKSL1Z8OXQV03N9TpV1yNlM7DyrSfJzf7mgLluYWPNELo5ZO2EpNrKKG_n3M6g0nVi_sOkVa95EbeUGts1-6o5u51TtPOG8CHBSLm0G6w_iDvZtAgwuAL9pk5RqW1TirL4bKrnMui11zUKD6DzzXRuNz8xySk4TZYCOYH6dMv64F6cI6hJ0uZxVxXZmaIEr0TXXd3j2rDmP3BnwxbAwCI91VxC3kVkDmZC-SfoSNdUXx',
    alt: 'Flatlay of Savyata luxury cosmetics on silk'
  },
  {
    id: 'ig3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9LjdmUr6ZdDBSQKAS5rmUyDscEhlnEMlTzfpwlEx4IuklTSfzTWvfA-_hyGB408vxTmImZ1pzsO_IUTIKGfi-L3g9qOkNdFzPn1nd_7K5hJ-NmP4NPXD0Q_BvtsOF8ynOyTPQiw__pIGjtNrSbh7Ew3ThdmFcAiHnn7xMfJX7ctGrA8V_qU_vw3PLkm31ZufblGS0CJ3whwVica8qMGO96wQMX383C0e_HCWyIKC0thxYdput5SDd',
    alt: 'Glowing cheekbones with Savyata Cloud Blush and Highlighter'
  },
  {
    id: 'ig4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkNLA7s59uOaL2FdEgw5e9plCNiMAlve7oeXh8UbgQ3pLkrEB6YUqiAtv5Ur7YlCGFKf0p_iBH0dTlzoWPOR8cLDUqqoIiK0vfVdPwKmVfXuQyyc2unLiVAk2U09kIfvIPkArbe9nV_kY7oJpP_17ZAMn8VAePNU_65bRAp8GBSgxJpEGDdaVm-5NutUXvcPrKF49wSWaKWcJSTen8LVBaWh18OE4ZgnUeuDDzK1ZfXmYC4i8W3EKQ',
    alt: 'Savyata Skin Tint bottle held against Himalayan blue sky'
  }
];

export const FREE_DELIVERY_THRESHOLD = 2500;
export const STANDARD_DELIVERY_FEE = 150;
