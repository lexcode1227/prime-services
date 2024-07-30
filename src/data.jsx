const jobsInformation = [
    {
        id: "1",
        title: "Experienced Interpreter",
        styleWork: "Remote",
        shortDescription: "We are looking for skilled interpreters with at least six months of demonstrated experience as an OPI/VRI in a call center setting.",
        longDescription: "We are looking for skilled interpreters with at least six months of demonstrated experience as an OPI/VRI in a call center setting. You will play a crucial role in facilitating communication for non-English speakers across diverse activities, offering expert interpretation services throughout various processes.",
        requirement: "Experience Required: Minimum six months as an OPI or VRI. |Bilingual Proficiency: Strong verbal and written skills in English. |Understanding of RESTful API design and implementation. |Voice Quality: Professional tone with clear enunciation and pronunciation. |Technical Requirements: Steady wired internet connection and a USB wired headset. |Operating System: Compatible with Windows 10 or MacOS. |Computer Skills: Proficient in using computer systems and software. |Strong problem-solving and troubleshooting skills. |Core Abilities: Excellent listening, retention, and note-taking skills. |English Fluency: At least 90% proficiency.",
        skills: "Proactivity |Fast learning ability |Effective verbal and written communication |Orientation to results |Excellent organizational skills |Analytical skills |Strong computer skills",
        benefits: "Remote Work: Fully remote position with a flexible schedule at any place in the world. |Position Type: Full-time or part-time availability. |Start Date: Immediate availability following onboarding. |Compensation: Monthly payments with per-minute option.",
        responsabilities: "Professional Conduct: Handle calls with professionalism, adhering to the Interpreter’s code of conduct. |Industry Knowledge: Understand and use specialized vocabulary relevant to healthcare and medical settings. |Communication: Report and coordinate with your team leader or supervisor. |Accurate Interpretation: Translate customer service information precisely into the patient's native language. |Confidentiality: Ensure patient confidentiality is maintained in line with policies and standards. |Service Quality: Foster positive interactions and maintain high-quality service with patients, customers, visitors, and healthcare providers."
    },
    // {
    //     id: "2",
    //     title: "Experienced Interpreter (Spanish-English)",
    //     styleWork: "Remote",
    //     shortDescription: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    //     longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa molestias, fugiat quis explicabo porro fugit inventore magni corrupti aliquid praesentium molestiae repellendus architecto dolor optio deleniti unde atque ullam laboriosam facere aperiam repellat error blanditiis. In, quod dolores minus iste quas qui, dolorem asperiores maxime, quibusdam ipsam molestias quidem.",
    //     requirement: "4+ years of experience in Java programming language, Node.js and Terraform. |Experience with cloud platforms such as Google Cloud Platform (GCP), Amazon Web Services (AWS), or Microsoft Azure. |Understanding of RESTful API design and implementation. |Experience with cloud platforms such as Google Cloud Platform (GCP), Amazon Web Services (AWS), or Microsoft Azure. |Experience with containerization technologies like Docker and container orchestration platforms like Kubernetes. |Knowledge of database systems such as MySQL and Cassandra DB. |Familiarity with DevOps practices and tools like Git, Jenkins, and CI/CD pipelines. |Strong problem-solving and troubleshooting skills. |Excellent communication and collaboration abilities. |Ability to work in a fast-paced and agile environment.",
    //     skills: "Proactivity |Fast learning ability |Ability to work under pressure and carry monthly sales quota |Sales orientation |Effective verbal and written communication |Orientation to results |Excellent organizational skills |Analytical skills |Strong computer skills",
    //     benefits: "Competitive salaries and bonuses |Flexible schedules |Personalized training oriented to developing your customer service skills |Learning tools that you can have accessible at any time (and just a click away!) |Career opportunities |Amazing benefits: On-site clinic, On-site Gym, Full Christmas Bonus, Alliances with great companies, Personal Days, and so much more!!"
    // },
    // {
    //     id: "3",
    //     title: "Experienced Interpreter (German-Spanish)",
    //     styleWork: "Remote",
    //     shortDescription: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    //     longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa molestias, fugiat quis explicabo porro fugit inventore magni corrupti aliquid praesentium molestiae repellendus architecto dolor optio deleniti unde atque ullam laboriosam facere aperiam repellat error blanditiis. In, quod dolores minus iste quas qui, dolorem asperiores maxime, quibusdam ipsam molestias quidem.",
    //     requirement: "3+ years of experience in Java programming language, Node.js and Terraform. |Experience with cloud platforms such as Google Cloud Platform (GCP), Amazon Web Services (AWS), or Microsoft Azure. |Understanding of RESTful API design and implementation. |Experience with cloud platforms such as Google Cloud Platform (GCP), Amazon Web Services (AWS), or Microsoft Azure. |Experience with containerization technologies like Docker and container orchestration platforms like Kubernetes. |Knowledge of database systems such as MySQL and Cassandra DB. |Familiarity with DevOps practices and tools like Git, Jenkins, and CI/CD pipelines. |Strong problem-solving and troubleshooting skills. |Excellent communication and collaboration abilities. |Ability to work in a fast-paced and agile environment.",
    //     skills: "Proactivity |Fast learning ability |Ability to work under pressure and carry monthly sales quota |Sales orientation |Effective verbal and written communication |Orientation to results |Excellent organizational skills |Analytical skills |Strong computer skills",
    //     benefits: "Competitive salaries and bonuses |Flexible schedules |Personalized training oriented to developing your customer service skills |Learning tools that you can have accessible at any time (and just a click away!) |Career opportunities |Amazing benefits: On-site clinic, On-site Gym, Full Christmas Bonus, Alliances with great companies, Personal Days, and so much more!!"
    // }
]

export const getJobsInformation = ()=>{
    return jobsInformation
}
export const getJobInformation = (id)=>{
    return jobsInformation.filter((item)=> item.id === id)
}