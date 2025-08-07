export default function Resume() {
    const resumeStyle: React.CSSProperties = {
    fontSize: '12pt',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
    whiteSpace: 'pre-wrap', // to preserve formatting (like line breaks)
    padding: '1rem',
  };

  const resumeText = `
Maulin Patel
Email: MaulinPatel5@gmail.com
Phone: (423)381-9820

Experience:
- Recently finished Fullstack Javascript bootcamp (React, React Native, TypeScript, Express.js, Node.js, bootstrap, Ajax,Jquery, CSS, HTML, Vite, MongoDB...etc)
- 3yrs - Sr Technical Advisor & SME at Apple Corp contract through Transcom Inc
- 4yrs - Software Eng - For parents' company quite some time ago (maybe 15-20yrs) making business apps in C++ and Java
- 4yrs - Software Eng - Same scenario as above for another business of their's. In C++/Java.
Education:
- A.S. in Computer Science: short 1 elective course.
- Claim Academy STL (Fullstack Javascript bootcamp)
- In search of certifications to expand on my knowledge. I'll be honest, some of them are pretty expensive, and I need a job first to pay for some of them.
Hobbies:
- Algos - When I was 15, I decrypted MCI/WorldCom's long distance card algorithm with a pen and a pad! Nothing illegal was done, I didn't use the fruits of my labor
I also like trying out other languages, scripting, or frameworks: Python, Vue.js, Next.js, Java again, SASS, Tailwind CSS, mySQL, PHP, Kotlin, Visual Basic, Go/Golang
I've played sports all my life: Basketball, Volleyball, Track, Soccer, Football, Golf, Baseball....You name it.`;
return (
    <div style={resumeStyle}>
      <h1><b>Resume:</b></h1>
      <div>{resumeText}</div>
    </div>
  );
}
