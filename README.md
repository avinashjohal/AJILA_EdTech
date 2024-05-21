## AJILA EdTech PROJECT BY AVINASH JOHAL || AJ

**A comprehensive e-learning platform**

AJILA EdTech is a full-stack web application designed to empower learners with a dynamic and interactive learning experience. 

**Technologies Used:**

* Frontend: React
* Backend: Django, Django REST Framework
* Styling: Bootstrap 5

**Key Features:**

* **Courses:** Explore a wide range of courses covering various topics and skillsets.
* **Trainings:** Enhance your professional development with focused training programs.
* **Internships:** Gain practical experience and launch your career with internship opportunities.


**Here are some screenshots showcasing the platform's functionalities (Replace with placeholders or actual screenshots):**

## AJILA HOME

**Image of Home Page**
![AJILA _ Home (1)](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/f2a02fb8-3365-4b06-8b04-6c17903bb7be)

**[Image of Courses page]**
![LMS _ All Courses](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/e79d63a2-43a5-4cc0-951e-23fb40a3050d)


**[Image of Trainings page]**
![LMS _ All Trainings](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/284d6365-672f-4d8a-a78f-5c2c60774ab8)

**[Image of Internships page]**
![LMS _ All Internships](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/aa9723f9-a8fb-461a-8bca-f6b740fc8032)

**Image of Roadmap Page**
![AJILA _ AI-Roadmap Page](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/ec8cd56a-63fe-487f-8ae5-ca8bbe58d24a)



## User Model

*User Login*
![User Login](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/b1248ba5-7c25-48cc-b79a-b82c9a3d66c5)

*User Register*
![User Register](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/f16680d8-bf0e-4970-bcb0-a2ad3b094290)

*Before User Login - Image of Couse Enrollment Page*
![AJILA _ Course Detail](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/001c718b-7e25-402c-90f5-e0db9ecb25cb)

*After Login - Image of Couse Enrollment Page*
![AJILA _ Course Detail (1)](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/d8bd70c7-e005-48a1-878f-6b78bf0b298a)

*After Enrollment - Image of Couse Enrollment Page*
![AJILA _ Course Detail (2)](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/be1b8340-5f17-44c6-b86f-60852ddbadb3)

*User Dashboard Image*
![User Dashboard](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/e3854c38-8120-41cf-8969-81ea6f82db04)



## Teacher Modle
*Teacher Register*
![Teacher Register (1)](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/d3fa73e6-ecb9-4a13-b834-96bd5a3244b2)

*Teacher Login*
![Teacher Login](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/ca4f38df-6b70-414f-8c68-d1a20b24231d)

*Teacher Dashboard Image*
![Teacher Dashboard](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/11f8982f-3dd4-4c6b-9275-246c46c45c12)

*Teacher Courses Image*
![Teacher _ My Courses](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/007f475e-ee57-4637-979a-64a4823f3a10)

*Teacher Trainings Image*
![Teacher _ My trainings](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/c00037b5-99f5-424b-9649-7f806841b1cc)

*Teacher Internships Image*
![Teacher _ My Internships](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/26a32e76-d1da-4c5f-acef-c93a017be818)

*Teacher Add Course Image* //Add Trainings and Add Internship feature is similar to this.
![Teacher _ Add Courses](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/76720007-fda4-40a1-afed-5ab485e1f1b8)

*Teacher Profile Setting Image*
![Teacher _ Profile Setting](https://github.com/avinashjohal/AJILA_EdTech/assets/93833286/a7cf4dd6-8057-40d3-b23b-e7837809006b)


**Getting Started**

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system
* Python 3.x installed on your system

**Backend Setup:**

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/AJILA_EdTech.git
   ```
2. Navigate to the project directory:
   ```bash
   cd AJILA_EdTech
   ```
3. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate.bat
   ```
4. Install required dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
5. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
6. Create a superuser account for administration:
   ```bash
   python manage.py createsuperuser
   ```
7. Start the development server:
   ```bash
   python manage.py runserver
   ```

**Frontend Setup:**

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install project dependencies:
   ```bash
   npm install  # or yarn install
   ```
3. Start the development server:
   ```bash
   npm start  # or yarn start
   ```

