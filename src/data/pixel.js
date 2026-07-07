export const pixelPackages = [
  {
    id: 'pixel-basic',
    name: 'Pixel Basic Setup',
    price: 'Rp750.000',
    internalPrice: 'Rp350.000',
    ideal: 'Company profile, simple landing page',
    features: [
      'Create / connect Meta Pixel',
      'Instalasi di satu website',
      'PageView event',
      'Domain verification',
      'Testing di Meta Events Manager',
      'Basic troubleshooting',
      'Dokumentasi singkat'
    ]
  },
  {
    id: 'pixel-conversion',
    name: 'Pixel Conversion Setup',
    price: 'Rp1.500.000',
    internalPrice: 'Rp750.000',
    ideal: 'Sales landing page, small e-commerce, lead generation',
    features: [
      'Semua fitur Basic',
      'Event mapping (ViewContent, Lead, Contact, AddToCart, InitiateCheckout, Purchase/CompleteRegistration)',
      'Custom conversions',
      'Event prioritization',
      'Basic UTM structure',
      'Testing & basic deduplication review',
      'Dokumentasi'
    ]
  },
  {
    id: 'pixel-capi',
    name: 'Pixel + Conversion API',
    priceLabel: 'STARTING FROM',
    price: 'Rp2.500.000',
    internalPrice: 'Rp1.500.000',
    ideal: 'Custom e-commerce, serious performance campaigns',
    features: [
      'Browser-side Meta Pixel',
      'Server-side Conversion API',
      'Event ID & deduplication',
      'Purchase value & currency',
      'Product / content ID mapping',
      'Hashed customer data parameters',
      'Event quality testing',
      'Domain verification & AEM setup',
      'Custom conversions & debugging',
      'Technical documentation'
    ]
  },
  {
    id: 'pixel-audit',
    name: 'Pixel Audit & Repair',
    priceLabel: 'STARTING FROM',
    price: 'Rp1.000.000',
    internalPrice: 'Rp500.000',
    ideal: 'Website dengan tracking bermasalah atau inaccurate',
    features: [
      'Pixel audit',
      'Duplicate event diagnosis',
      'Purchase value & currency review',
      'Domain ownership review',
      'Event mapping repair',
      'Retesting',
      'Audit report'
    ]
  }
]
