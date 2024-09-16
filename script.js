// // Define Member class
// class Member {
//     constructor(name, age, membershipType) {
//         this.name = name;
//         this.age = age;
//         this.membershipType = membershipType;
//     }
// }

// // Handle form submission
// document.getElementById('add-member-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Get form values
//     let name = document.getElementById('member-name').value;
//     let age = document.getElementById('member-age').value;
//     let membershipType = document.getElementById('membership-type').value;

//     // Create new member object
//     const member = new Member(name, age, membershipType);

//     // Add member to the list
//     addMemberToList(member);

//     // Reset form fields
//     document.getElementById('add-member-form').reset();
// });

// // Function to add member to the list
// function addMemberToList(member) {
//     const memberList = document.getElementById('member-list');
//     const listItem = document.createElement('li');
//     listItem.textContent = `${member.name}` - `Age: ${member.age}`, `Membership Type: ${member.membershipType}`;
//     memberList.appendChild(listItem);
/ -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attractive Website Example</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #f0f0f0;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .header {
      background-color: #007bff;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .main-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .card {
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      border-radius: 8px;
    }
    .card img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1rem;
    }
  </style>
</head>
<body>
  <header class="header">
    <h1>Attractive Website Example</h1>
    <p>Welcome to our beautiful website!</p>
  </header>

  <div class="container">
    <main class="main-section">
      <section class="card">
        <img src="image1.jpg" alt="Image 1">
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod urna vel erat vehicula.</p>
      </section>
      <section class="card">
        <img src="image2.jpg" alt="Image 2">
        <h2>Section 2</h2>
        <p>Suspendisse potenti. Donec non felis sed tortor suscipit aliquet. Proin maximus eros ut orci lobortis.</p>
      </section>
      <section class="card">
        <img src="image3.jpg" alt="Image 3">
        <h2>Section 3</h2>
        <p>Curabitur gravida enim ac est dignissim, ac ultricies nisi tristique. Vivamus vitae tellus ut erat rutrum.</p>
      </section>
    </main>
  </div>

  <footer class="footer">
    <p>&copy; 2024 Attractive Website. All rights reserved.</p>
  </footer>
</body>
</html>