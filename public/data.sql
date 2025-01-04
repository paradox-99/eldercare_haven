CREATE TABLE guardians (
    _id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(11) NOT NULL UNIQUE,
    permanent_address VARCHAR(250),
    present_address VARCHAR(250),
    NID VARCHAR(16) NOT NULL UNIQUE,
    image VARCHAR(250),
    relationship VARCHAR(25),
    em_name VARCHAR(30),
    em_relationship VARCHAR(25),
    em_phone VARCHAR(11)
);


CREATE TABLE residents (
    _id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    photo VARCHAR(250) NOT NULL,
    address VARCHAR(250) NOT NULL,
    nid VARCHAR(16) UNIQUE,
    occupation VARCHAR(100),
    religion VARCHAR(15),
    past_illnesses VARCHAR(1000),
    past_surgeries VARCHAR(1000),
    chronic_conditions VARCHAR(1000),
    allergies VARCHAR(500),
    mental_health_issues VARCHAR(1000),
    current_medications VARCHAR(1000),
    guardians_id VARCHAR(20),

    FOREIGN KEY (guardians_id) REFERENCES guardians(_id)
);


CREATE TABLE employees_basic_info (
    employee_id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    dob DATE NOT NULL,
    nid VARCHAR(16) NOT NULL UNIQUE,
    phone VARCHAR(11) NOT NULL UNIQUE,
    permanent_address VARCHAR(250),
    current_address VARCHAR(250),
    photo VARCHAR(250),
    gender VARCHAR(15),
    joining_date DATE,
    work_schedule INT,
    salary INT
);


CREATE TABLE doctors (
    _id VARCHAR(20) PRIMARY KEY,
    license_number VARCHAR(25) NOT NULL UNIQUE,
    specialization VARCHAR(500) NOT NULL,
    experience INT NOT NULL,
    education VARCHAR(300) NOT NULL,
    employee_id VARCHAR(20),

    FOREIGN KEY (employee_id) REFERENCES employees_basic_info(employee_id)
);


CREATE TABLE nurses (
    _id VARCHAR(20) PRIMARY KEY,
    license_number VARCHAR(25) NOT NULL,
    experience INT NOT NULL,
    education VARCHAR(300) NOT NULL,
    employee_id VARCHAR(20),

    FOREIGN KEY (employee_id) REFERENCES employees_basic_info(employee_id),
    UNIQUE (license_number)
);


CREATE TABLE caregivers (
    _id VARCHAR(20) PRIMARY KEY,
    experience INT NOT NULL,
    education VARCHAR(300) NOT NULL,
    employee_id VARCHAR(20),

    FOREIGN KEY (employee_id) REFERENCES employees_basic_info(employee_id)
);


CREATE TABLE circumstances (
    cir_id VARCHAR(20) PRIMARY KEY,
    date DATE NOT NULL,
    details VARCHAR(1000),
    res_id VARCHAR(20),

    FOREIGN KEY (res_id) REFERENCES residents(_id)
);


CREATE TABLE donors (
    donor_id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(11) NOT NULL,
    address VARCHAR(250) NOT NULL,
    donating_area VARCHAR(150),
    message VARCHAR(1000),
    anonymous BOOLEAN,
    amount INT NOT NULL,
    payment_method VARCHAR(20),
    trx_id VARCHAR(30),
    date DATE,
    guardians_id VARCHAR(20),
    
    FOREIGN KEY (guardians_id) REFERENCES guardians(_id)
);


CREATE TABLE reviews (
    _id VARCHAR(20) PRIMARY KEY,
    review VARCHAR(1000),
    guardians_id VARCHAR(20),

    FOREIGN KEY (guardians_id) REFERENCES guardians(_id)
);


CREATE TABLE packages (
    package_id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(30),
    image VARCHAR(250),
    features VARCHAR(1500),
    photos VARCHAR(250),
    price INT
);


CREATE TABLE booking_info (
    _id VARCHAR(20) PRIMARY KEY,
    amount INT,
    trx_id VARCHAR(20),
    date DATE,
    payment_method VARCHAR(20),
    package_id VARCHAR(20),
    guardians_id VARCHAR(20),

    FOREIGN KEY (package_id) REFERENCES packages(package_id),
    FOREIGN KEY (guardians_id) REFERENCES guardians(id)
);



INSERT INTO guardians (_id, name, email, phone, permanent_address, present_address, NID, image, relationship, em_name, em_relationship, em_phone) 
VALUES
('GR-1735864472922', 'Arif Ahmed', 'arif.ahmed@example.com', '01712345125', '12A, Main Road, Dhanmondi, Dhaka, Dhaka', '15B, Sector 4, Uttara, Dhaka, Dhaka', '1234567890023456', 'arif_image.jpg', 'Father', 'Nasima Ahmed', 'Daughter', '01987654321'),
('GR-1735864472509', 'Nasima Begum', 'nasima.begum@example.com', '01912345123', '34C, Green Road, Farmgate, Dhaka, Dhaka', '56D, Lake View, Gulshan, Dhaka, Dhaka', '2345678901234568', 'nasima_image.jpg', 'Mother', 'Alif Ahmed', 'Son', '01765432123'),
('GR-1735864472381', 'Saiful Islam', 'saiful.islam@example.com', '01812355123', '10/5, Badda Link Road, Badda, Dhaka, Dhaka', 'A1, Mirpur DOHS, Mirpur, Dhaka, Dhaka', '3456789002345678', 'saiful_image.jpg', 'Brother', 'Rashida Islam', 'Sister', '01876543210'),
('GR-1735864472815', 'Sadia Rahman', 'sadia.rahman@example.com', '01738765432', '22B, Banani Road, Banani, Dhaka, Dhaka', '45C, Niketon, Gulshan, Dhaka, Dhaka', '4567890123456789', 'sadia_image.jpg', 'Sister', 'Faisal Rahman', 'Brother', '01711223344'),
('GR-1735864472320', 'Rahmat Ullah', 'rahmat.ullah@example.com', '01998765123', '14A, Sector 6, Uttara, Dhaka, Dhaka', 'Flat-10, Bashundhara R/A, Dhaka, Dhaka', '5678901234567890', 'rahmat_image.jpg', 'Father', 'Arman Ullah', 'Son', '01933445566'),
('GR-1735864472472', 'Faisal Ahmed', 'faisal.ahmed@example.com', '01876543123', '5B, Central Road, Shahbagh, Dhaka, Dhaka', '20A, Pallabi, Mirpur, Dhaka, Dhaka', '6789012345678900', 'faisal_image.jpg', 'Brother', 'Alina Ahmed', 'Sister', '01799887766'),
('GR-1735864472728', 'Samira Akter', 'samira.akter@example.com', '01755544321', '8/3, Airport Road, Tejgaon, Dhaka, Dhaka', 'Flat-4B, Nikunja, Khilkhet, Dhaka, Dhaka', '7890123556789012', 'samira_image.jpg', 'Mother', 'Nafis Akter', 'Son', '01955667788'),
('GR-1735864472754', 'Tania Khan', 'tania.khan@example.com', '01812349999', '11/6, Tikatuli, Motijheel, Dhaka, Dhaka', '15A, Lalmatia, Mohammadpur, Dhaka, Dhaka', '8901234567890123', 'tania_image.jpg', 'Sister', 'Shamim Khan', 'Brother', '01888997744'),
('GR-1735864472271', 'Rashida Parvin', 'rashida.parvin@example.com', '01798761234', 'Flat-15, Ashkona, Dakshinkhan, Dhaka, Dhaka', '2/5, DOHS Baridhara, Dhaka, Dhaka', '9012345678901234', 'rashida_image.jpg', 'Mother', 'Fahim Parvin', 'Son', '01999887744'),
('GR-1735864472401', 'Fahim Ullah', 'fahim.ullah@example.com', '01855443322', '3B, Panthapath, Kalabagan, Dhaka, Dhaka', '12C, Mirpur-1, Dhaka, Dhaka', '0123456789012345', 'fahim_image.jpg', 'Father', 'Shabnam Ullah', 'Daughter', '01733221144'),
('GR-1735864472058', 'Ayesha Khatun', 'ayesha.khatun@example.com', '01799887766', 'Flat-10, Bashabo, Sabujbagh, Dhaka, Dhaka', 'Flat-20, Wari, Dhaka, Dhaka', '1123456789012345', 'ayesha_image.jpg', 'Mother', 'Kamal Khatun', 'Son', '01766554433'),
('GR-1735864472172', 'Kamal Hossain', 'kamal.hossain@example.com', '01888997744', '22B, Elephant Road, New Market, Dhaka, Dhaka', 'Flat-15, Banasree, Rampura, Dhaka, Dhaka', '2234567890123456', 'kamal_image.jpg', 'Brother', 'Salma Hossain', 'Sister', '01855443322'),
('GR-1735864472840', 'Asif Mahmud', 'asif.mahmud@example.com', '01988778655', '9/4, Kazi Nazrul Avenue, Kawran Bazar, Dhaka, Dhaka', 'Flat-12, Jatrabari, Dhaka, Dhaka', '3345678901234567', 'asif_image.jpg', 'Brother', 'Raihan Mahmud', 'Brother', '01955443322'),
('GR-1735864472757', 'Nafisa Sultana', 'nafisa.sultana@example.com', '01766554411', 'Flat-5C, Zindabazar, Sylhet, Sylhet', 'Flat-7B, Subidbazar, Sylhet, Sylhet', '4456789012345678', 'nafisa_image.jpg', 'Sister', 'Maruf Sultana', 'Brother', '01811223344'),
('GR-1735864472868', 'Tanvir Alam', 'tanvir.alam@example.com', '01799886622', '2A, Station Road, Chittagong, Chittagong', 'Flat-11, Panchlaish, Chittagong, Chittagong', '5567890123456789', 'tanvir_image.jpg', 'Father', 'Amin Alam', 'Son', '01966554422'),
('GR-1735864472666', 'Aminul Haque', 'aminul.haque@example.com', '01766553344', '6/5, West Agargaon, Dhaka, Dhaka', 'Flat-8C, Shewrapara, Mirpur, Dhaka, Dhaka', '6678901234567890', 'aminul_image.jpg', 'Brother', 'Rehena Haque', 'Sister', '01833445577'),
('GR-1735864472185', 'Nusrat Jahan', 'nusrat.jahan@example.com', '01855443221', 'Flat-3A, Rajarbagh, Motijheel, Dhaka, Dhaka', 'Flat-5B, Shyamoli, Dhaka, Dhaka', '7789012345678901', 'nusrat_image.jpg', 'Mother', 'Rifat Jahan', 'Son', '01744556677'),
('GR-1735864472276', 'Mahmud Hossain', 'mahmud.hossain@example.com', '01744332211', 'Flat-1B, Kazipara, Mirpur, Dhaka, Dhaka', 'Flat-2C, Monipuripara, Tejgaon, Dhaka, Dhaka', '8890123456789012', 'mahmud_image.jpg', 'Father', 'Hasan Hossain', 'Son', '01933221144'),
('GR-1735864472328', 'Farhana Akter', 'farhana.akter@example.com', '01988776633', '3B, Chowhatta, Sylhet, Sylhet', 'Flat-7A, Rikabibazar, Sylhet, Sylhet', '9901234567890123', 'farhana_image.jpg', 'Sister', 'Arif Akter', 'Brother', '01799887733'),
('GR-1735864472810', 'Maruf Hasan', 'maruf.hasan@example.com', '01744331122', '5A, Bogura Road, Bogura, Bogura', 'Flat-4B, Charmatha, Bogura, Bogura', '1012345678901234', 'maruf_image.jpg', 'Brother', 'Tania Hasan', 'Sister', '01866778899'),
('GR-1735864472775', 'Arif Hasan', 'arif.hasan@example.com', '01711223344', 'House-3, Shahjahanpur, Dhaka, Dhaka', 'Flat-2B, Banani, Dhaka, Dhaka', '1234547890123456', 'arif_image.jpg', 'Father', 'Sharmin Hasan', 'Daughter', '01999887755'),
('GR-1735864472835', 'Kamal Hossain', 'kamaal.hossain@example.com', '01899887766', 'Flat-12, Court Road, Chittagong, Chittagong', 'House-9, Agrabad, Chittagong, Chittagong', '2145678901234567', 'kamal_image.jpg', 'Uncle', 'Faruk Hossain', 'Nephew', '01777665544'),
('GR-1735864472639', 'Subrata Chakraborty', 'subrata.chakraborty@example.com', '01988776655', 'Flat-5C, GEC Circle, Chittagong, Chittagong', 'Flat-7A, Panchlaish, Chittagong, Chittagong', '7456789012345678', 'subrata_image.jpg', 'Brother', 'Dipankar Chakraborty', 'Brother', '01666554433'),
('GR-1735864472710', 'Anita Roy', 'anita.roy@example.com', '01677665533', 'Flat-3B, Rajshahi Court, Rajshahi, Rajshahi', 'Flat-1C, Boalia, Rajshahi, Rajshahi', '4568890123456789', 'anita_image.jpg', 'Sister', 'Sunil Roy', 'Brother', '01987456321'),
('GR-1735864472041', 'Rafiq Islam', 'rafiq.islam@example.com', '01766554433', 'House-6, Baluchar, Sylhet, Sylhet', 'House-21, Tilagor, Sylhet, Sylhet', '5978901234567890', 'rafiq_image.jpg', 'Brother', 'Jamal Uddin', 'Brother', '01655443322'),
('GR-1735864472291', 'Anwar Hossain', 'anwar.hossain@example.com', '01966554422', 'House-23, Dhanmondi, Dhaka, Dhaka', 'Flat-4D, Mohammadpur, Dhaka, Dhaka', '6689012345678901', 'anwar_image.jpg', 'Father', 'Rahim Hossain', 'Son', '01877665599'),
('GR-1735864472682', 'Christopher Gomes', 'christopher.gomes@example.com', '01644332211', 'Flat-3C, Church Road, Dhaka, Dhaka', 'Flat-1A, Tejgaon, Dhaka, Dhaka', '7891123456789012', 'christopher_image.jpg', 'Uncle', 'Maria Gomes', 'Niece', '01965432109'),
('GR-1735864472361', 'Maria Gomes', 'maria.gomes@example.com', '01988776644', 'House-5A, Gulshan, Dhaka, Dhaka', 'Flat-6C, Banani, Dhaka, Dhaka', '8901235567890123', 'maria_image.jpg', 'Niece', 'Christopher Gomes', 'Uncle', '01644332211'),
('GR-1735864472360', 'Ajmal Hossain', 'ajmal.hossain@example.com', '01755443311', 'House-8, Station Road, Khulna, Khulna', 'Flat-3B, Khalishpur, Khulna, Khulna', '9062345678901234', 'ajmal_image.jpg', 'Brother', 'Sharmin Hossain', 'Sister', '01899887755'),
('GR-1735864472422', 'Sanjib Das', 'sanjib.das@example.com', '01855332244', 'Flat-1A, Jail Road, Barisal, Barisal', 'Flat-3E, College Road, Barisal, Barisal', '1234567890123459', 'sanjib_image.jpg', 'Brother', 'Sunita Das', 'Sister', '01788776633'),
('GR-1735864472794', 'Sadia Akter', 'sadia.akter@example.com', '01799887744', 'House-45, Kazirhat, Noakhali, Noakhali', 'Flat-2C, Maijdee, Noakhali, Noakhali', '2345678901234590', 'sadia_image.jpg', 'Mother', 'Fahim Akter', 'Son', '01966554433'),
('GR-1735864472178', 'Fahim Akter', 'fahim.akter@example.com', '01977665599', 'Flat-5C, Kazirhat, Noakhali, Noakhali', 'Flat-1B, Maijdee, Noakhali, Noakhali', '3456789012345690', 'fahim_image.jpg', 'Son', 'Sadia Akter', 'Mother', '01799887744'),
('GR-1735864472696', 'Juliana Souza', 'juliana.dsouza@example.com', '01866554433', 'House-7, Farmgate, Dhaka, Dhaka', 'Flat-5A, Mohakhali, Dhaka, Dhaka', '4567890123456790', 'juliana_image.jpg', 'Daughter', 'Anthony Souza', 'Father', '01988776688'),
('GR-1735864472283', 'Anthony Souza', 'anthony.dsouza@example.com', '01988776688', 'Flat-2C, Dhanmondi, Dhaka, Dhaka', 'Flat-1D, Gulshan, Dhaka, Dhaka', '5678901234567895', 'anthony_image.jpg', 'Father', 'Juliana DSouza', 'Daughter', '01866554433'),
('GR-1735864472457', 'Ujjwal Chakma', 'ujjwal.chakma@example.com', '01777665533', 'House-12, Rangamati, Chittagong Hill Tracts, Chittagong', 'Flat-6E, Banani, Dhaka, Dhaka', '6789012345678956', 'ujjwal_image.jpg', 'Brother', 'Ananta Chakma', 'Brother', '01688776633'),
('GR-1735864472930', 'Ananta Chakma', 'ananta.chakma@example.com', '01688776633', 'House-10, Bandarban, Chittagong Hill Tracts, Chittagong', 'Flat-8B, Gulshan, Dhaka, Dhaka', '7890123456789567', 'ananta_image.jpg', 'Brother', 'Ujjwal Chakma', 'Brother', '01777665533'),
('GR-1735864472402', 'Subrata Roy', 'subrata.roy@example.com', '01966554428', 'Flat-8B, Dinajpur, Dinajpur', 'Flat-1G, New Market, Dinajpur, Dinajpur', '8901234567895678', 'subrata_image.jpg', 'Uncle', 'Dipankar Roy', 'Nephew', '01866554433'),
('GR-1735864472752', 'Dipankar Roy', 'dipankar.roy@example.com', '01866554433', 'Flat-6B, Rangpur, Rangpur', 'Flat-2H, Station Road, Rangpur, Rangpur', '9012345678956789', 'dipankar_image.jpg', 'Nephew', 'Subrata Roy', 'Uncle', '01966554422'),
('GR-1735864472592', 'Sangita Debnath', 'sangita.debnath@example.com', '01799887744', 'Flat-3C, Mirzapur, Tangail, Tangail', 'Flat-7B, College Road, Tangail, Tangail', '2305678901234567', 'sangita_image.jpg', 'Mother', 'Prakash Debnath', 'Son', '01844332266'),
('GR-1735864472178', 'Prakash Debnath', 'prakash.debnath@example.com', '01844332266', 'House-23, Sirajganj, Sirajganj', 'Flat-9C, Station Road, Sirajganj, Sirajganj', '1234567890123478', 'prakash_image.jpg', 'Son', 'Sangita Debnath', 'Mother', '01799887744'),
('GR-1735864472978', 'Salim Uddin', 'salim.uddin@example.com', '01711122334', 'House-12, Palash, Narsingdi, Narsingdi', 'Flat-2B, Banasree, Dhaka, Dhaka', '2345678901234567', 'salim_image.jpg', 'Father', 'Zahida Uddin', 'Mother', '01966554433'),
('GR-1735864472444', 'Dipa Khatun', 'dipa.khatun@example.com', '01722233445', 'Flat-1B, Mirpur, Dhaka, Dhaka', 'Flat-3C, Uttara, Dhaka, Dhaka', '3456789012345678', 'dipa_image.jpg', 'Sister', 'Shamim Khatun', 'Sister', '01644332211'),
('GR-1735864472793', 'Fahim Ahmed', 'fahim.ahmed@example.com', '01844332255', 'House-9, College Road, Bogura, Bogura', 'Flat-5A, Banani, Dhaka, Dhaka', '4568800123456789', 'fahim_image.jpg', 'Brother', 'Meherun Ahmed', 'Sister', '01777665544'),
('GR-1735864472778', 'Nargis Akter', 'nargis.akter@example.com', '01733445566', 'House-3A, Moulvibazar, Moulvibazar, Moulvibazar', 'Flat-6B, New Market, Moulvibazar, Moulvibazar', '5678101234567890', 'nargis_image.jpg', 'Mother', 'Asma Akter', 'Daughter', '01999887755'),
('GR-1735864472669', 'Nazrul Islam', 'nazrul.islam@example.com', '01744556677', 'Flat-8C, Sylhet Sadar, Sylhet, Sylhet', 'House-4A, Akhalia, Sylhet, Sylhet', '6789012345678901', 'nazrul_image.jpg', 'Father', 'Shirin Islam', 'Mother', '01799887744'),
('GR-1735864472488', 'Mohammad Ismail', 'mohammad.ismail@example.com', '01855667788', 'House-2B, Khalishpur, Khulna, Khulna', 'Flat-1D, Sonadanga, Khulna, Khulna', '7890123456789012', 'ismail_image.jpg', 'Brother', 'Shirin Ismail', 'Sister', '01688776622'),
('GR-1735864472508', 'Shamim Ahmed', 'shamim.ahmed@example.com', '01966778899', 'House-6D, Barishal, Barishal, Barishal', 'Flat-9B, Madhabkunda, Barishal, Barishal', '8901234567894123', 'shamim_image.jpg', 'Uncle', 'Fazlul Karim', 'Nephew', '01777665533'),
('GR-1735864472671', 'Anwarul Karim', 'anwarul.karim@example.com', '01855667799', 'House-2B, Tangail, Tangail, Tangail', 'Flat-4A, Tungal, Tangail, Tangail', '9002345678901234', 'karim_image.jpg', 'Brother', 'Laila Karim', 'Sister', '01966554444'),
('GR-1735864472892', 'Tariq Jamil', 'tariq.jamil@example.com', '01966778811', 'House-4C, Shibganj, Bogura, Bogura', 'Flat-2C, Sherpur, Bogura, Bogura', '0123446789012345', 'tariq_image.jpg', 'Father', 'Shilpi Jamil', 'Daughter', '01799887766'),
('GR-1735864472544', 'Sumaiya Rahman', 'sumaiya.rahman@example.com', '01799887777', 'Flat-2B, Lalbagh, Dhaka, Dhaka', 'Flat-6D, Kafrul, Dhaka, Dhaka', '1234567890123456', 'sumaiya_image.jpg', 'Mother', 'Sabina Rahman', 'Daughter', '01855443322');




INSERT INTO donors (donor_id, name, email, phone, address, donating_area, message, anonymous, amount, payment_method, trx_id, date, guardians_id) 
VALUES 
('DO-1735865355917', 'Rahim Uddin', 'rahim.uddin@example.com', '01712345678', 'House 12, Mirpur DOHS, Dhaka', 'food', 'Helping with basic food supplies.', FALSE, 5000, 'bkash', 'TRX123456', '2025-01-01', 'GR-1735864472922'),
('DO-1735865355876', 'Nasima Akter', 'nasima.akter@example.com', '01912345678', 'Block B, Uttara, Dhaka', NULL, NULL, TRUE, 3000, 'nagad', 'TRX654321', '2025-01-02', NULL),
('DO-1735865356019', 'Mamun Hossain', 'mamun.hossain@example.com', '01733456789', 'Shantinagar, Dhaka', 'healthcare', NULL, FALSE, 7000, 'bank_transfer', 'TRX987654', '2025-01-03', 'GR-1735864472509'),
('DO-1735865355563', 'Shabana Rahman', 'shabana.rahman@example.com', '01844567890', 'Gulshan 2, Dhaka', NULL, 'Providing food for the elderly.', TRUE, 2000, 'cash', NULL, '2025-01-04', NULL),
('DO-1735865356022', 'Kamrul Islam', 'kamrul.islam@example.com', '01555567890', 'Niketon, Dhaka', 'medicine', NULL, FALSE, 4000, 'bkash', 'TRX321654', '2025-01-05', 'GR-1735864472381'),
('DO-1735865356033', 'Jannat Ara', 'jannat.ara@example.com', '01922234567', 'Baridhara, Dhaka', NULL, NULL, TRUE, 2500, 'nagad', 'TRX456789', '2025-01-06', NULL),
('DO-1735865355714', 'Mehedi Hasan', 'mehedi.hasan@example.com', '01712349999', 'Banasree, Dhaka', 'food', NULL, FALSE, 6000, 'bank_transfer', 'TRX789123', '2025-01-07', 'GR-1735864472815'),
('DO-1735865356256', 'Laila Sultana', 'laila.sultana@example.com', '01912341111', 'Bashundhara, Dhaka', NULL, 'Medicine donation.', TRUE, 1500, 'bkash', 'TRX654987', '2025-01-08', NULL),
('DO-1735865356271', 'Jahangir Alam', 'jahangir.alam@example.com', '01555558888', 'Motijheel, Dhaka', 'healthcare', 'General healthcare support.', FALSE, 3500, 'nagad', 'TRX321789', '2025-01-09', 'GR-1735864472320'),
('DO-1735865355797', 'Shahin Akter', 'shahin.akter@example.com', '01812347777', 'Mohakhali, Dhaka', NULL, NULL, TRUE, 4500, 'cash', NULL, '2025-01-10', NULL),
('DO-1735865355297', 'Fahim Rahman', 'fahim.rahman@example.com', '01711112222', 'Green Road, Dhaka', 'food', 'Food supplies for elderly.', FALSE, 5000, 'bkash', 'TRX111111', '2025-01-01', 'GR-1735864472185'),
('DO-1735865356190', 'Tahmina Akter', 'tahmina.akter@example.com', '01911113333', 'Kazipara, Mirpur, Dhaka', NULL, NULL, TRUE, 3000, 'nagad', 'TRX222222', '2025-01-02', NULL),
('DO-1735865355490', 'Karim Uddin', 'karim.uddin@example.com', '01744445555', 'Banani, Dhaka', 'healthcare', NULL, FALSE, 7000, 'bank_transfer', 'TRX333333', '2025-01-03', 'GR-1735864472276'),
('DO-1735865356027', 'Ayesha Sultana', 'ayesha.sultana@example.com', '01855556666', 'Tejgaon, Dhaka', NULL, 'Supporting medical needs.', TRUE, 2000, 'cash', NULL, '2025-01-04', NULL),
('DO-1735865356016', 'Sajjad Hossain', 'sajjad.hossain@example.com', '01566667777', 'Rampura, Dhaka', 'medicine', NULL, FALSE, 4000, 'bkash', 'TRX444444', '2025-01-05', 'GR-1735864472328'),
('DO-1735865355478', 'Rumana Begum', 'rumana.begum@example.com', '01777778888', 'Dhanmondi, Dhaka', NULL, NULL, TRUE, 2500, 'nagad', 'TRX555555', '2025-01-06', NULL),
('DO-1735865355369', 'Imran Hossain', 'imran.hossain@example.com', '01988889999', 'Shahbagh, Dhaka', 'food', NULL, FALSE, 6000, 'bank_transfer', 'TRX666666', '2025-01-07', 'GR-1735864472810'),
('DO-1735865355986', 'Farzana Haque', 'farzana.haque@example.com', '01899990000', 'Bashundhara, Dhaka', NULL, 'Donating for elderly care.', TRUE, 1500, 'bkash', 'TRX777777', '2025-01-08', NULL),
('DO-1735865355316', 'Shakil Ahmed', 'shakil.ahmed@example.com', '01510101010', 'Uttara, Dhaka', 'healthcare', 'Support for health-related expenses.', FALSE, 3500, 'nagad', 'TRX888888', '2025-01-09', 'GR-1735864472185'),
('DO-1735865355631', 'Sharmin Jahan', 'sharmin.jahan@example.com', '01711110000', 'Mohakhali, Dhaka', NULL, NULL, TRUE, 4500, 'cash', NULL, '2025-01-10', NULL),
('DO-1735865355298', 'Nayeem Islam', 'nayeem.islam@example.com', '01712223334', 'Badda, Dhaka', 'food', 'Providing food packets.', FALSE, 5500, 'bkash', 'TRX999111', '2025-01-01', NULL),
('DO-1735865355682', 'Afia Khan', 'afia.khan@example.com', '01934455667', 'Farmgate, Dhaka', NULL, NULL, TRUE, 3000, 'nagad', 'TRX112233', '2025-01-02', NULL),
('DO-1735865355483', 'Jahidul Islam', 'jahidul.islam@example.com', '01844556677', 'Azimpur, Dhaka', 'medicine', NULL, FALSE, 4500, 'bank_transfer', 'TRX223344', '2025-01-03', NULL),
('DO-1735865355658', 'Taslima Akter', 'taslima.akter@example.com', '01555667788', 'Mohammadpur, Dhaka', NULL, 'Supporting elderly with medicine.', TRUE, 2500, 'cash', NULL, '2025-01-04', NULL),
('DO-1735865355473', 'Anwar Hossain', 'anwar.hossain@example.com', '01766778899', 'Khilgaon, Dhaka', 'healthcare', NULL, FALSE, 5000, 'bkash', 'TRX334455', '2025-01-05', NULL),
('DO-1735865355414', 'Farzana Rahman', 'farzana.rahman@example.com', '01977889900', 'Shantinagar, Dhaka', NULL, NULL, TRUE, 4000, 'nagad', 'TRX445566', '2025-01-06', NULL),
('DO-1735865355539', 'Imran Khan', 'imran.khan@example.com', '01788990011', 'Dhanmondi, Dhaka', 'food', NULL, FALSE, 6000, 'bank_transfer', 'TRX556677', '2025-01-07', NULL),
('DO-1735865355760', 'Sharmin Ara', 'sharmin.ara@example.com', '01899001122', 'Banani, Dhaka', NULL, 'Food support for seniors.', TRUE, 3000, 'bkash', 'TRX667788', '2025-01-08', NULL),
('DO-1735865356137', 'Hasibul Hossain', 'hasibul.hossain@example.com', '01599001133', 'Uttara, Dhaka', 'medicine', NULL, FALSE, 7000, 'nagad', 'TRX778899', '2025-01-09', NULL),
('DO-1735865356125', 'Maliha Sultana', 'maliha.sultana@example.com', '01999001144', 'Mirpur, Dhaka', NULL, NULL, TRUE, 2500, 'cash', NULL, '2025-01-10', NULL),
('DO-1735865356061', 'Nafis Ahmed', 'nafis.ahmed@example.com', '01712345678', 'Mohammadpur, Dhaka', 'food', 'May you always find joy and peace in every moment.', FALSE, 8000, 'bkash', 'TRX998877', '2025-01-11', NULL),
('DO-1735865356237', 'Aminul Islam', 'aminul.islam@example.com', '01912345678', 'Dhanmondi, Dhaka', NULL, NULL, TRUE, 4000, 'nagad', 'TRX887766', '2025-01-12', NULL),
('DO-1735865356118', 'Rabeya Sultana', 'rabeya.sultana@example.com', '01812345678', 'Farmgate, Dhaka', 'medicine', 'Stay strong and healthy. You are loved and valued.', FALSE, 10000, 'bank_transfer', 'TRX776655', '2025-01-13', NULL),
('DO-1735865355402', 'Mehedi Hasan', 'mehedi.hasan7@example.com', '01798765432', 'Tejgaon, Dhaka', NULL, NULL, TRUE, 2000, 'cash', NULL, '2025-01-14', NULL),
('DO-1735865356205', 'Tanjina Akter', 'tanjina.akter@example.com', '01998765432', 'Shantinagar, Dhaka', 'healthcare', 'Wishing you happiness and good health always.', FALSE, 6000, 'bkash', 'TRX665544', '2025-01-15', NULL),
('DO-1735865356086', 'Rahima Khatun', 'rahima.khatun@example.com', '01898765432', 'Bashundhara, Dhaka', NULL, 'You are an inspiration to all of us. Keep smiling.', TRUE, 3000, 'nagad', 'TRX554433', '2025-01-16', NULL),
('DO-1735865356247', 'Mahfuzul Karim', 'mahfuzul.karim@example.com', '01787654321', 'Rampura, Dhaka', 'food', 'May your days be filled with warmth and love.', FALSE, 7500, 'bank_transfer', 'TRX443322', '2025-01-17', NULL),
('DO-1735865356154', 'Khaleda Begum', 'khaleda.begum@example.com', '01987654321', 'Banani, Dhaka', NULL, 'Sending love and prayers for your well-being.', TRUE, 5000, 'cash', NULL, '2025-01-18', NULL),
('DO-1735865356213', 'Shahidul Islam', 'shahidul.islam@example.com', '01776543210', 'Mirpur, Dhaka', 'medicine', 'You have given us so much. Now it is our turn to care for you.', FALSE, 5500, 'bkash', 'TRX332211', '2025-01-19', NULL),
('DO-1735865355929', 'Anwara Akter', 'anwara.akter@example.com', '01976543210', 'Uttara, Dhaka', NULL, 'May Allah bless you with good health and happiness.', TRUE, 3000, 'nagad', 'TRX221100', '2025-01-20', NULL),
('DO-1735865356208', 'Alif Hossain', 'alif.hossain@example.com', '01712345123', 'Mohammadpur, Dhaka', 'food', 'Supporting your efforts to serve the elderly.', FALSE, 7000, 'bkash', 'TRX123456', '2025-01-21', NULL),
('DO-1735865355651', 'Samira Akter', 'samira.akter5@example.com', '01812345123', 'Dhanmondi, Dhaka', NULL, NULL, TRUE, 5000, 'nagad', 'TRX234567', '2025-01-22', NULL),
('DO-1735865356184', 'Nazmul Islam', 'nazmul.islam@example.com', '01798765123', 'Bashundhara, Dhaka', 'medicine', 'Hope this helps you get the medicines you need.', FALSE, 8000, 'bank_transfer', 'TRX345678', '2025-01-23', NULL),
('DO-1735865356007', 'Rahmat Ullah', 'rahmat.ullah8@example.com', '01998765123', 'Farmgate, Dhaka', NULL, 'Small contributions can make big changes.', TRUE, 3000, 'cash', NULL, '2025-01-24', NULL),
('DO-1735865355888', 'Sadia Rahman', 'sadia.rahmann@example.com', '01834567123', 'Rampura, Dhaka', 'healthcare', 'May this bring you comfort and care.', FALSE, 6000, 'bkash', 'TRX456789', '2025-01-25', NULL),
('DO-1735865355347', 'Arif Ahmed', 'ariff.ahmed@example.com', '01776543123', 'Shantinagar, Dhaka', NULL, NULL, TRUE, 2500, 'nagad', 'TRX567890', '2025-01-26', NULL),
('DO-1735865355837', 'Nasima Begum', 'nasima.beegum@example.com', '01987654123', 'Banani, Dhaka', 'food', 'Hope this helps with your daily needs.', FALSE, 7500, 'bank_transfer', 'TRX678901', '2025-01-27', NULL),
('DO-1735865355625', 'Saiful Islam', 'saifull.islam@example.com', '01765432123', 'Mirpur, Dhaka', NULL, NULL, TRUE, 4000, 'bkash', 'TRX789012', '2025-01-28', NULL),
('DO-1735865356016', 'Hasina Akter', 'hasina.akter@example.com', '01976543123', 'Uttara, Dhaka', 'medicine', 'Wishing you good health and happiness.', FALSE, 5000, 'nagad', 'TRX890123', '2025-01-29', NULL),
('DO-1735865355981', 'Zahid Hasan', 'zahid.hasan@example.com', '01865432123', 'Tejgaon, Dhaka', NULL, 'Thank you for your dedication and hard work.', TRUE, 3500, 'cash', NULL, '2025-01-30', NULL);