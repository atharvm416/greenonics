# Greenonics Project

## Overview

This project, developed under the **Coherent Business Solutions** team, is a full-stack e-commerce application named **Greenonics**. The project includes both a frontend and a backend, enabling users to register and purchase items from [greenonics.com](http://greenonics.com).

## Technology Stack

### Frontend

- **Framework**: React Native
- **Styling**: Tailwind CSS

### Backend

- **Framework**: Django
- **Database**: MySQL

## Features

- **User Management**: Users can register, log in, and manage their profiles.
- **E-commerce Functionality**: Users can browse and purchase items.
- **AI Integration**: The frontend was initially generated using an AI tool that converts Figma designs into React Native code, significantly speeding up the development process with minimal adjustments required.

## Project Details

- **Duration**: The project was developed and tested in just 2 weeks.
- **AI Tool**: The AI tool used to convert Figma designs into React Native code played a crucial role in rapid development. This innovative approach allowed us to build a functional e-commerce website swiftly.

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/atharvm416/greenonics.git
   cd greenonics

2. **Frontend Setup**:
   ```bash
   cd frontend
   - Install the libraries and run the code
   ```bash
   npm install
   npm start

3. **Database Setup**:

   
   I. **MySQL Database Creation**:
   - Create a MySQL database for the project. You can use a MySQL client like MySQL Workbench or the command line to create the database.
   
   II. **Database Credentials**:
   - Open `settings.py` file located in the Django backend (`greenoics/settings.py`).
   - Find the `DATABASES` dictionary and update the `NAME`, `USER`, `PASSWORD`, `HOST`, and `PORT` fields under the `'default'` key with your MySQL database credentials.

   Example:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'your_database_name',
           'USER': 'your_mysql_username',
           'PASSWORD': 'your_mysql_password',
           'HOST': 'localhost',   # Or your MySQL host IP address
           'PORT': '3306',        # Or your MySQL port
       }
   }
```
4. **Backend Setup**:

   I. **Navigate to Backend Directory**:
      ```bash
      cd backend
      ```

   II. **Create a Virtual Environment** (if not already created):
       ```bash
       python -m venv venv
       source venv/bin/activate   # On Windows use `venv\Scripts\activate`
       ```

       This step creates a virtual environment named `venv` for isolating your project's dependencies.

   III. **Install Required Libraries**:
       ```bash
       pip install -r requirements.txt
       ```

       This command installs all necessary Python libraries listed in the `requirements.txt` file.

   IV. **Apply Database Migrations**:
       ```bash
       python manage.py makemigrations
       python manage.py migrate
       ```

       These commands prepare and apply database migrations to create tables based on your Django models.

   V. **Run the Django Development Server**:
       ```bash
       python manage.py runserver
       ```

       Start the Django development server locally. This will run your backend at `http://localhost:8000`.





### Instructions

1. **Clone the repository**: Clone your project repository from GitHub.
2. **Frontend Setup**: Navigate to the frontend directory, install dependencies, and start the development server.
3. **Backend Setup**: Navigate to the backend directory, set up a virtual environment, install dependencies from `requirements.txt`, configure environment variables in `.env`, run migrations, and start the Django server.
4. **Usage**: Provide URLs to access the frontend and backend of your application.


Thank you for exploring the repository! If you're passionate about AI and innovative projects like this, let's connect. Feel free to reach out for collaborations or discussions on AI-related endeavors. Together, we can create something amazing!

Feel free to adjust any paths, URLs, or specific instructions based on your actual setup and requirements.
