const apartments = [
    {
        id: '1',
        title: 'Modern 2BR Downtown',
        price: 12500,
        size: 85,
        location: 'Nørrebro, Copenhagen',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=600&fit=crop'
        ],
        description: 'Beautiful modern apartment with open kitchen and natural light. Close to vibrant nightlife and restaurants.',
        amenities: ['WiFi', 'Balcony', 'Gym', 'Parking']
    },
    {
        id: '2',
        title: 'Cozy 1BR Vesterbro',
        price: 9500,
        size: 55,
        location: 'Vesterbro, Copenhagen',
        bedrooms: 1,
        bathrooms: 1,
        furnished: false,
        images: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'
        ],
        description: 'Charming studio apartment in the heart of Vesterbro. Perfect for young professionals.',
        amenities: ['WiFi', 'Kitchen', 'Laundry']
    },
    {
        id: '3',
        title: 'Spacious 3BR Ørestad',
        price: 15000,
        size: 120,
        location: 'Ørestad, Copenhagen',
        bedrooms: 3,
        bathrooms: 2,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9bc841d7e98d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1516934024178-0c18797f9aea?w=800&h=600&fit=crop'
        ],
        description: 'Luxury apartment with modern amenities and city views. New building with excellent infrastructure.',
        amenities: ['WiFi', 'Gym', 'Pool', 'Parking', 'Balcony']
    },
    {
        id: '4',
        title: 'Bright 2BR Amager',
        price: 11000,
        size: 75,
        location: 'Amager Vest, Copenhagen',
        bedrooms: 2,
        bathrooms: 1,
        furnished: false,
        images: [
            'https://images.unsplash.com/photo-1513694203232-fe5fc1c5a315?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=600&fit=crop'
        ],
        description: 'Newly renovated apartment with excellent natural light. Close to beach and public transport.',
        amenities: ['WiFi', 'Balcony', 'Parking', 'Storage']
    },
    {
        id: '5',
        title: 'Trendy 1BR Frederiksberg',
        price: 10500,
        size: 62,
        location: 'Frederiksberg, Copenhagen',
        bedrooms: 1,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1509893163602-40d8e8f3fc85?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop'
        ],
        description: 'Hip apartment in popular Frederiksberg with great cafes and parks nearby.',
        amenities: ['WiFi', 'Kitchen', 'Garden Access']
    },
    {
        id: '6',
        title: 'Luxury Penthouse Kongens Nytorv',
        price: 18500,
        size: 140,
        location: 'Kongens Nytorv, Copenhagen',
        bedrooms: 3,
        bathrooms: 2,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1508873699372-f003971e586b?w=800&h=600&fit=crop'
        ],
        description: 'Premium penthouse in heart of Copenhagen with stunning views and designer interior.',
        amenities: ['WiFi', 'Sauna', 'Rooftop', 'Gym', 'Concierge']
    },
    {
        id: '7',
        title: 'Green Living Tåsinge',
        price: 8500,
        size: 65,
        location: 'Tåsinge, Odense',
        bedrooms: 1,
        bathrooms: 1,
        furnished: false,
        images: [
            'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1570129476589-94f50b330d28?w=800&h=600&fit=crop'
        ],
        description: 'Peaceful apartment surrounded by nature. Great for those seeking a quieter lifestyle.',
        amenities: ['Garden', 'Parking', 'Kitchen']
    },
    {
        id: '8',
        title: 'Student Housing Nørrebrohuset',
        price: 7500,
        size: 42,
        location: 'Nørrebro, Copenhagen',
        bedrooms: 1,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1494526585095-c894fdbb938d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop'
        ],
        description: 'Perfect for students! Affordable room with shared facilities and vibrant community.',
        amenities: ['WiFi', 'Shared Kitchen', 'Common Area']
    },
    {
        id: '9',
        title: 'Designer Loft Aarhus',
        price: 13500,
        size: 95,
        location: 'Latinerkvarteret, Aarhus',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1565693566230-04dc7ba1ae20?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop'
        ],
        description: 'Industrial chic loft apartment with high ceilings and artistic flair.',
        amenities: ['WiFi', 'Art Studio', 'Parking', 'Balcony']
    },
    {
        id: '10',
        title: 'Family Home Rungsted',
        price: 16000,
        size: 130,
        location: 'Rungsted Kyst, Copenhagen',
        bedrooms: 4,
        bathrooms: 2,
        furnished: false,
        images: [
            'https://images.unsplash.com/photo-1480074568708-e7b720bb3f5d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1571896367968-fc7ee04e9c30?w=800&h=600&fit=crop'
        ],
        description: 'Spacious family home near beach with garden. Great for sharing with roommates.',
        amenities: ['Garden', 'Parking', 'Laundry', 'Patio']
    },
    {
        id: '11',
        title: 'Historic Townhouse Christianshavn',
        price: 14200,
        size: 88,
        location: 'Christianshavn, Copenhagen',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1524708925147-1c2ed2f34f0c?w=800&h=600&fit=crop'
        ],
        description: 'Charming historic townhouse with character. Close to canals and old town charm.',
        amenities: ['WiFi', 'Fireplace', 'Garden', 'Parking']
    },
    {
        id: '12',
        title: 'Waterfront Studio Aarhus',
        price: 9800,
        size: 52,
        location: 'ARoS, Aarhus',
        bedrooms: 1,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1570129476589-94f50b330d28?w=800&h=600&fit=crop'
        ],
        description: 'Modern waterfront studio with views. Perfect location for cultural enthusiasts.',
        amenities: ['WiFi', 'Balcony', 'Modern Kitchen']
    },
    {
        id: '13',
        title: 'Eco-Friendly 2BR Dalby',
        price: 10800,
        size: 78,
        location: 'Dalby, Copenhagen Area',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1544457068-60cea77e4fca?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop'
        ],
        description: 'Sustainable living apartment with solar panels and organic garden. Green lifestyle awaits!',
        amenities: ['Solar Panels', 'Garden', 'Composting', 'WiFi']
    },
    {
        id: '14',
        title: 'Urban Jungle Nørrebro',
        price: 11900,
        size: 72,
        location: 'Nørrebro, Copenhagen',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop'
        ],
        description: 'Trendy apartment with plants and natural elements. Very Instagram-worthy!',
        amenities: ['WiFi', 'Rooftop Garden', 'Smart Home', 'Parking']
    },
    {
        id: '15',
        title: 'Beach House Hornbæk',
        price: 13800,
        size: 92,
        location: 'Hornbæk, North Zealand',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1525634214355-c8414bcac813?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1516934024178-0c18797f9aea?w=800&h=600&fit=crop'
        ],
        description: 'Beautiful beach house with direct beach access. Perfect for surfers and beach lovers.',
        amenities: ['Beach Access', 'WiFi', 'Parking', 'Outdoor Shower']
    },
    {
        id: '16',
        title: 'Quiet Suburb Hellerup',
        price: 12200,
        size: 80,
        location: 'Hellerup, Copenhagen',
        bedrooms: 2,
        bathrooms: 1,
        furnished: false,
        images: [
            'https://images.unsplash.com/photo-1492889906886-8d1ce4dc985c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1572120471610-62588afed4d1?w=800&h=600&fit=crop'
        ],
        description: 'Peaceful suburban living with excellent public transport connections.',
        amenities: ['Garden', 'Garage', 'Quiet Area', 'Parks Nearby']
    },
    {
        id: '17',
        title: 'Artistic Loft Meatpacking',
        price: 14700,
        size: 105,
        location: 'Meatpacking District, Copenhagen',
        bedrooms: 2,
        bathrooms: 2,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1503672260482-701de8f9048f?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1465497069779-f30e4d47e34f?w=800&h=600&fit=crop'
        ],
        description: 'Industrial loft in trendy area with galleries and restaurants. Creative vibes!',
        amenities: ['WiFi', 'Studio Space', 'High Ceilings', 'Terrace']
    },
    {
        id: '18',
        title: 'Tech Hub Medley',
        price: 13200,
        size: 87,
        location: 'Medley, Copenhagen',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&h=600&fit=crop'
        ],
        description: 'Modern apartment in tech hub with super fast WiFi and co-working space nearby.',
        amenities: ['WiFi', 'Smart Home', 'Gym', 'Co-working']
    },
    {
        id: '19',
        title: 'Botanical Vibes Hellerup',
        price: 10200,
        size: 68,
        location: 'Hellerup, Copenhagen',
        bedrooms: 1,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=800&h=600&fit=crop'
        ],
        description: 'Zen apartment with garden access and botanical theme. Perfect for nature lovers.',
        amenities: ['Garden Access', 'WiFi', 'Meditation Room']
    },
    {
        id: '20',
        title: 'City Center Premium',
        price: 17000,
        size: 110,
        location: 'Strøget, Copenhagen',
        bedrooms: 2,
        bathrooms: 2,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1531592573087-7e58bc6b1a63?w=800&h=600&fit=crop'
        ],
        description: 'Premium apartment in the heart of Copenhagen with 24/7 access to shops and dining.',
        amenities: ['Doorman', 'WiFi', 'Climate Control', 'Parking']
    },
    {
        id: '21',
        title: 'Hipster Haven Islands Brygge',
        price: 12800,
        size: 83,
        location: 'Islands Brygge, Copenhagen',
        bedrooms: 2,
        bathrooms: 1,
        furnished: true,
        images: [
            'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1571896367968-fc7ee04e9c30?w=800&h=600&fit=crop'
        ],
        description: 'Cool waterfront apartment with direct access to the harbour. Social and vibrant area!',
        amenities: ['Waterfront Access', 'WiFi', 'Rooftop', 'Gym']
    }
];

const personalityQuestions = [
    {
        id: '1',
        question: 'Do you smoke?',
        options: ['Yes, regularly', 'Occasionally', 'No, never']
    },
    {
        id: '2',
        question: 'Do you have pets?',
        options: ['Yes, cats', 'Yes, dogs', 'Yes, other', 'No pets']
    },
    {
        id: '3',
        question: 'What is your sleep schedule?',
        options: ['Early bird (6-8 AM)', 'Moderate (7-9 AM)', 'Night owl (9-11 AM+)']
    },
    {
        id: '4',
        question: 'How often do you cook?',
        options: ['Daily', '3-4 times per week', '1-2 times per week', 'Rarely']
    },
    {
        id: '5',
        question: 'What is your cleaning style?',
        options: ['Very clean & organized', 'Moderately clean', 'Relaxed approach']
    },
    {
        id: '6',
        question: 'Do you have guests over often?',
        options: ['Frequently (multiple per week)', 'Sometimes (1-2 per week)', 'Occasionally', 'Rarely']
    },
    {
        id: '7',
        question: 'How do you feel about sharing spaces?',
        options: ['Love it, very social', 'Comfortable with it', 'Prefer personal space']
    },
    {
        id: '8',
        question: 'How do you handle noise?',
        options: ['Love music & socializing', 'Moderate noise is OK', 'Prefer quiet environment']
    }
];
