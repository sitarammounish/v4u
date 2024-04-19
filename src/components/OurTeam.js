// Worked by Sitaram Mounish Talluri - 8885467
import React from 'react';
import '../Css/ourTeam.css'; 
import porkodi from "../images/porkodi.jpeg"
import hiral from "../images/hiral.jpeg"
import kirtan from "../images/kirtan.jpeg"
import mounish from "../images/mounish.jpeg"

const OurTeam = () => {
    // Array of team members with their details
    const teamMembers = [
        {
            name: 'Hiral Barot',
            designation: 'HR Manager',
            avatar: hiral
        },
        {
            name: 'Kirtan Dabhoya',
            designation: 'Chef - Asian / Japaneese',
            avatar: kirtan
        },
        {
            name: 'Porkodi Rajan',
            designation: 'Executive Manager ',
            avatar: porkodi
        },
        {
            name: 'Mounish Talluri',
            designation: 'Customer Relations',
            avatar: mounish
        }
    ];

    return (
        <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.avatar} alt={`Avatar of ${member.name}`} />
                        <p className="member-name">{member.name}</p>
                        <p className="member-designation">{member.designation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
