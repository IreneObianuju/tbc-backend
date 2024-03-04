const user = {
    "id": 11,
    "email": "emmanueljoce+100@gmail.com",
    "first_name": "Bruce",
    "last_name": "Ciroma",
    "middle_name": "Topido",
    "dob": "1995-11-23",
    "phone": "09047254936",
    "profile_photo": "doctors_profile_photos/WhatsAppImage2023-06-05at160412jpg_1701971626.jpg",
    "email_verified_at": "2023-12-07 05:52:57",
    "phone_verified_at": "2023-12-12 11:09:51",
    "fcm_token": null,
    "remember_token": null,
    "status": "pending",
    "available": 0,
    "token": "27|72UgnuQSOPwrclamEqoQ4DqnZNMnsACiGLfyCNvJ",
    "no_of_patients": 1,
    "hours_consulted": 5,
    "weeklyEarnings": "0.00",
    "wallet": {
        "balance": "0.00",
        "earnings": "0.00"
    },
    "specialization": {
        "id": 17,
        "name": "Dentist",
        "title": "Teeth & Oral Health",
        "parent": "9"
    },
    "active_schedules": [
        {
            "id": 24,
            "doctor_id": 11,
            "start_time": "1702639800",
            "end_time": "1702641600",
            "status": "active",
            "booked_by": null
        },
        {
            "id": 27,
            "doctor_id": 11,
            "start_time": "1703174400",
            "end_time": "1703176200",
            "status": "active",
            "booked_by": null
        }
    ],
    "approved_schedules": [
        {
            "id": 28,
            "doctor_id": 11,
            "start_time": "1702711800",
            "end_time": "1702713600",
            "status": "booked",
            "booked_by": 3,
            "patient": {
                "id": 3,
                "email_address": "nnebuchiosigbo340@gmail.com",
                "username": "nnesco",
                "first_name": "Nnebuchi",
                "last_name": "Osigbo",
                "middle_name": "",
                "phone": "08083549952",
                "dob": "1993-03-21",
                "gender": "male",
                "occupation": "Software Engineering",
                "profile_photo": "patients_profile_photos/PXL20231105090726875jpg_1700750170.jpg",
                "email_verified_at": "2023-11-23 02:34:55",
                "phone_verified_at": null,
                "remember_token": null,
                "slug": "s1tuMWPC"
            },
            "meeting": {
                "id": 8,
                "schedule_id": "28",
                "meeting_link": "hCh9-MUV-sA9",
                "duration": 0,
                "created_at": "2023-12-14T08:46:31.000000Z",
                "updated_at": "2023-12-14T08:46:31.000000Z",
                "max_duration": 30
            }
        }
    ],
    "appointment_histories": [],
    "certifications": [
        {
            "id": 9,
            "doctor_id": 11,
            "institution": "Rivers State University",
            "cert_name": "Bachelor of Medicine",
            "cert_number": "RSU-2022-MB-4938",
            "cert_photo": "doctors_certifications/summer-school-3jpg_1702422750.jpg",
            "year_acquired": "2023-04-06",
            "slug": "Bachelor-of-Medicine-vxU02"
        }
    ],
    "city": {
        "id": 217,
        "name": "Bekwarra"
    },
    "country": {
        "id": 160,
        "name": "Nigeria"
    },
    "earnings": [],
    "patients": [
        {
            "id": 4,
            "email": "favourtasie62@gmail.com",
            "username": "tasie",
            "first_name": "Favour",
            "last_name": "Tasie",
            "middle_name": "",
            "phone": "09018537698",
            "dob": "1998-08-17",
            "gender": "male",
            "occupation": "UI/UX Designer",
            "profile_photo": "patients_profile_photos/29989182932594616010009728635983790496289616n1jpg_1701078919.jpg",
            "email_verified_at": "2023-11-27 09:44:46",
            "phone_verified_at": "2023-11-27 09:45:37",
            "remember_token": null,
            "slug": "86qrTzCT",
            "pivot": {
                "doctor_id": 11,
                "patient_id": 4
            }
        }
    ],
    "ratings": [],
    "state": {
        "id": 2656,
        "name": "Cross River"
    },
    "work_histories": [
        {
            "id": 11,
            "doctor_id": 11,
            "organization": "Society for Family Health",
            "role": "Head of Family Planning",
            "date_started": {
                "original": "2023-11-08",
                "modified": "November, 2023"
            },
            "date_ended": {
                "original": null,
                "modified": null
            },
            "slug": "Society-for-Family-Health-VrN9E"
        }
    ],
    "active_days": [
        {
            "id": 22,
            "doctor_id": 11,
            "start_time": "1702467000",
            "end_time": "1702468800",
            "status": "active",
            "booked_by": null
        },
        { 
            "id": 23,
            "doctor_id": 11,
            "start_time": "1702553400",
            "end_time": "1702555200",
            "status": "success",
            "booked_by": 4
        }
       
    ]
}

// number of patients he has
console.log(user["no_of_patients"]);

// Name of his Specialization
console.log(user.specialization.name);

// Email ddres of the first patient of his first approved schedule
console.log(user.approved_schedules[0].patient.email_address);

// The year he acquired his first certificate
console.log(user.certifications[0].year_acquired);

// The organization he worked for under work histories
console.log(user.work_histories[0].organization);


// console.log(user.active_schedules[1].id);
// console.log(user.city.id);
