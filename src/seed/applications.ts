/*
  {
    "email": "fake@gmail.com",
    "first_name": "Armin",
    "last_name": "Talaie",
    "pref_name": "Armin",
    "faculty_id": 3,
    "program_id": 3,
    "standing_id": 2,
    "resume_link": "www.google.ca",
    "gender_id": null,
    "ethnicity_id": null,
    "pronoun_id": null,
    "user_id": null
  }
*/

export interface ApplicationI {
	firstName: string;
	lastName: string;
	email: string;
	prefName: string;
	faculty: number;
	program: number;
	standing: number;
	resumeLink: string;
}
