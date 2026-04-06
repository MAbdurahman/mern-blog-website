const postsData = [
   {
      title: 'Things We Do For Love (Kaikella rakkaudella)',
      bannerImage: 'http://dummyimage.com/197x100.png/dddddd/000000',
      description: 'Freshly cut carrot sticks, perfect for snacking.',
      content: []
   },
   {
      title: 'Knock on Wood',
      bannerImage: 'http://dummyimage.com/102x100.png/dddddd/000000',
      description: 'Twisted pasta perfect for salads and pasta dishes.',
      content: [{}]
   },
   {
      title: 'Ciao, Professore! (Io speriamo che me la cavo)',
      bannerImage: 'http://dummyimage.com/226x100.png/cc0000/ffffff',
      description: 'Portable induction cooktop for quick heating.',
      content: [{}]
   },
   {
      title: 'Well Digger\'s Daughter, The (La fille du puisatier)',
      bannerImage: 'http://dummyimage.com/131x100.png/5fa2dd/ffffff',
      description: 'Natural mineral salt with a subtle flavor, ideal for cooking and seasoning.',
      content: []
   },
   {
      title: 'Blindsight',
      bannerImage: 'http://dummyimage.com/154x100.png/cc0000/ffffff',
      description: 'Personal massager for muscle recovery.',
      content: []
   },
   {
      'title': 'Children of Hiroshima (Gembaku no ko)',
      bannerImage: 'http://dummyimage.com/199x100.png/dddddd/000000',
      description: 'Instant miso soup mix, just add hot water for a warm meal.',
      content: []
   },
   {
      title: 'Charlie Victor Romeo',
      bannerImage: 'http://dummyimage.com/155x100.png/5fa2dd/ffffff',
      description: 'Delicious and tangy marinade for grilling or baking chicken.',
      content: [{}]
   },
   {
      title: 'Changing Times (Les temps qui changent)',
      bannerImage: 'http://dummyimage.com/156x100.png/5fa2dd/ffffff',
      description: 'Reusable wraps for food storage, replacing plastic wraps.',
      content: [{}]
   },
   {
      title: 'Different for Girls',
      bannerImage: 'http://dummyimage.com/161x100.png/ff4444/ffffff',
      description: 'A tangy sauce made with cranberries and citrus zest, perfect for turkey and chicken dishes.',
      content: [{}]
   },
   {
      title: 'Louis Theroux: Twilight of the Porn Stars',
      bannerImage: 'http://dummyimage.com/188x100.png/ff4444/ffffff',
      description: 'Manual pasta maker for homemade pasta.',
      content: [{}]
   },
   {
      title: 'Children of Paradise (Les enfants du paradis)',
      bannerImage: 'http://dummyimage.com/162x100.png/5fa2dd/ffffff',
      description: 'Ultrasonic diffuser that helps create a calming atmosphere.',
      content: []
   },
   {
      title: 'Hate (Haine, La)',
      bannerImage: 'http://dummyimage.com/101x100.png/cc0000/ffffff',
      description: 'Moisturizing body wash with natural ingredients.',
      content: []
   },
   {
      title: 'Bruna Surfistinha',
      bannerImage: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
      description: 'Regulate water temperature for safe and comfortable showers.',
      content: []
   },
   {
      title: 'Dot the I',
      bannerImage: 'http://dummyimage.com/140x100.png/cc0000/ffffff',
      description: 'A delicious creamy dip featuring spinach and artichokes, perfect for parties.',
      content: []
   },
   {
      title: 'Cannonball',
      bannerImage: 'http://dummyimage.com/146x100.png/dddddd/000000',
      description: 'Soft corner protectors to keep babies safe at home.',
      content: []
   },
   {
      title: 'Backstairs (Hintertreppe)',
      bannerImage: 'http://dummyimage.com/191x100.png/ff4444/ffffff',
      description: 'Delicious dark chocolate with creamy nut butter inside.',
      content: [{}]
   },
   {
      title: 'Chorus, The (Hamsarayan)',
      bannerImage: 'http://dummyimage.com/117x100.png/ff4444/ffffff',
      description: 'Magnetic puzzle assembly board for kids.',
      content: []
   },
   {
      title: 'That\'s Life!',
      bannerImage: 'http://dummyimage.com/117x100.png/dddddd/000000',
      description: 'Track your meals and nutrition with this handy food journal.',
      content: [{}]
   },
   {
      title: 'Shy People',
      bannerImage: 'http://dummyimage.com/112x100.png/5fa2dd/ffffff',
      description: 'Lean and versatile ground turkey, perfect for various dishes.',
      content: []
   },
   {
      title: 'Contact High',
      bannerImage: 'http://dummyimage.com/162x100.png/dddddd/000000',
      description: 'Savory sausage links with a hint of maple flavor.',
      content: [{}]
   },
   {
      title: 'Lunopolis',
      bannerImage: 'http://dummyimage.com/159x100.png/dddddd/000000',
      description: 'High-intensity flashlight with adjustable focus and brightness.',
      content: [{}]
   },
   {
      title: 'Broom-Stick Bunny',
      bannerImage: 'http://dummyimage.com/124x100.png/dddddd/000000',
      description: 'Cozy faux fur blanket to add warmth and style to your home.',
      content: []
   },
   {
      title: 'Thirst (Bakjwi)',
      bannerImage: 'http://dummyimage.com/184x100.png/ff4444/ffffff',
      description: 'Healthy snack bars packed with oats and fruit.',
      content: []
   },
   {
      title: 'Arrays',
      bannerImage: 'http://dummyimage.com/209x100.png/ff4444/ffffff',
      description: 'Hand-poured candles made of natural soy wax.',
      content: []
   },
   {
      title: 'Redemption of General Butt Naked, The',
      bannerImage: 'http://dummyimage.com/172x100.png/5fa2dd/ffffff',
      description: 'Light and fluffy popcorn coated in sweet honey butter.',
      content: []
   },
   {
      title: 'Rickshaw Man, The (Muhomatsu no issho)',
      bannerImage: 'http://dummyimage.com/182x100.png/5fa2dd/ffffff',
      description: 'String lights for decorating holiday trees.',
      content: []
   },
   {
      title: 'Get to Know Your Rabbit',
      bannerImage: 'http://dummyimage.com/229x100.png/ff4444/ffffff',
      description: 'A soothing herbal tea made from ginger root.',
      content: [{}]
   },
   {
      title: 'Chandni Chowk to China',
      bannerImage: 'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
      description: 'Comfortable wireless headphones designed for sleeping.',
      content: []
   },
   {
      title: 'Adanggaman',
      bannerImage: 'http://dummyimage.com/121x100.png/dddddd/000000',
      description: 'Spicy chili sauce for an extra kick in your meals.',
      content: [{}]
   },
   {
      title: 'Times Square',
      bannerImage: 'http://dummyimage.com/235x100.png/ff4444/ffffff',
      description: 'Learning tablet with kid-friendly educational apps.',
      content: []
   },
   {
      title: 'Three Steps Above Heaven (Tres metros sobre el cielo)',
      bannerImage: 'http://dummyimage.com/179x100.png/cc0000/ffffff',
      description: 'Nutritious protein bar with cherry and almond flavor, great for on-the-go.',
      content: [{}]
   },
   {
      title: 'Walk Like a Man',
      bannerImage: 'http://dummyimage.com/175x100.png/cc0000/ffffff',
      description: 'Ready-to-bake cookie dough packed with chocolate chips.',
      content: [{}]
   }];


export default postsData;