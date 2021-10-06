const skills = [
    { id: 314, skill: 'HTML', learning: true },
    { id: 714, skill: 'C++', learning: false },
    { id: 365, skill: 'JavaScript', learning: true },
    { id: 007, skill: 'Python', learning: false }
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}