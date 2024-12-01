-- Guardians Table with JSON Data
CREATE TABLE guardians (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    permanent_address VARCHAR(255),
    current_address VARCHAR(255),
    relation_with_resident VARCHAR(20),
    nid VARCHAR(20),
    photo VARCHAR(255),
    emergency_contact JSON
);
-- Insert Data into Guardians Table
INSERT INTO guardians (
        name,
        phone_number,
        email,
        permanent_address,
        current_address,
        relation_with_resident,
        nid,
        photo,
        emergency_contact
    )
VALUES (
        'Rahim Uddin',
        '+8801712345678',
        'rahim.uddin@example.com',
        'Kallyanpur, Narail, Jessore',
        'House: 12, Road: 5, Mirpur DOHS, Dhaka',
        'Son',
        '1234567890123',
        'https://example.com/photos/rahim_uddin.jpg',
        '{ "name": "Shamim Akhtar", "relationship": "Brother", "phone_number": "+8801812345678" }'
    ),
    (
        'Farhana Alam',
        '+8801912345678',
        'farhana.alam@example.com',
        'Dhanbari, Muktagacha, Mymensingh',
        'Apartment: 7B, Block: A, Banani, Dhaka',
        'Daughter',
        '9876543210987',
        'https://example.com/photos/farhana_alam.jpg',
        '{ "name": "Asif Rahman", "relationship": "Brother", "phone_number": "+8801512345678" }'
    ),
    (
        'Abdul Karim',
        '+8801711123456',
        'abdul.karim@example.com',
        'Shibpur, Narsingdi, Dhaka',
        'Flat: 4C, Green Road, Dhanmondi, Dhaka',
        'Son',
        '1234567890111',
        'https://example.com/photos/abdul_karim.jpg',
        '{ "name": "Salma Begum", "relationship": "Sister", "phone_number": "+8801811123456" }'
    ),
    (
        'Nasima Akter',
        '+8801912345670',
        'nasima.akter@example.com',
        'Bajitpur, Kishoreganj, Dhaka',
        'House: 23, Block: B, Uttara, Dhaka',
        'Daughter',
        '9876543210112',
        'https://example.com/photos/nasima_akter.jpg',
        '{ "name": "Rashidul Hasan", "relationship": "Brother", "phone_number": "+8801512345670" }'
    ),
    (
        'Mamun Hossain',
        '+8801713345678',
        'mamun.hossain@example.com',
        'Belkuchi, Sirajganj, Rajshahi',
        'Apartment: 10A, Shantinagar, Dhaka',
        'Son',
        '1234567890113',
        'https://example.com/photos/mamun_hossain.jpg',
        '{ "name": "Mina Khatun", "relationship": "Sister", "phone_number": "+8801813345678" }'
    ),
    (
        'Shabana Rahman',
        '+8801814456789',
        'shabana.rahman@example.com',
        'Lalmai, Comilla, Chittagong',
        'Flat: 5D, Gulshan 2, Dhaka',
        'Daughter',
        '9876543210114',
        'https://example.com/photos/shabana_rahman.jpg',
        '{ "name": "Kamal Rahman", "relationship": "Brother", "phone_number": "+8801514456789" }'
    ),
    (
        'Kamrul Islam',
        '+8801555567890',
        'kamrul.islam@example.com',
        'Debidwar, Comilla, Chittagong',
        'House: 7B, Niketon, Dhaka',
        'Son',
        '1234567890115',
        'https://example.com/photos/kamrul_islam.jpg',
        '{ "name": "Rima Islam", "relationship": "Sister", "phone_number": "+8801855567890" }'
    ),
    (
        'Jannat Ara',
        '+8801922234567',
        'jannat.ara@example.com',
        'Kaliganj, Gazipur, Dhaka',
        'Flat: 9E, Baridhara, Dhaka',
        'Daughter',
        '9876543210116',
        'https://example.com/photos/jannat_ara.jpg',
        '{ "name": "Ashraf Ali", "relationship": "Brother", "phone_number": "+8801522234567" }'
    ),
    (
        'Mehedi Hasan',
        '+8801712349999',
        'mehedi.hasan@example.com',
        'Shalikha, Magura, Khulna',
        'House: 11, Block: C, Banasree, Dhaka',
        'Son',
        '1234567890117',
        'https://example.com/photos/mehedi_hasan.jpg',
        '{ "name": "Mina Hasan", "relationship": "Sister", "phone_number": "+8801812349999" }'
    ),
    (
        'Laila Sultana',
        '+8801912341111',
        'laila.sultana@example.com',
        'Dumki, Patuakhali, Barisal',
        'Apartment: 3F, Bashundhara, Dhaka',
        'Daughter',
        '9876543210118',
        'https://example.com/photos/laila_sultana.jpg',
        '{ "name": "Farid Sultana", "relationship": "Brother", "phone_number": "+8801512341111" }'
    ),
    (
        'Jahangir Alam',
        '+8801555558888',
        'jahangir.alam@example.com',
        'Bagha, Rajshahi, Rajshahi',
        'Flat: 8G, Motijheel, Dhaka',
        'Son',
        '1234567890119',
        'https://example.com/photos/jahangir_alam.jpg',
        '{ "name": "Nur Alam", "relationship": "Brother", "phone_number": "+8801855558888" }'
    ),
    (
        'Shahin Akter',
        '+8801812347777',
        'shahin.akter@example.com',
        'Ullapara, Sirajganj, Rajshahi',
        'House: 15A, Mohakhali, Dhaka',
        'Daughter',
        '9876543210120',
        'https://example.com/photos/shahin_akter.jpg',
        '{ "name": "Samin Akter", "relationship": "Sister", "phone_number": "+8801512347777" }'
    );