// Sample Data
const sports = [
    { id: 1, name: "Cricket", icon: "🏏" },
    { id: 2, name: "Football", icon: "⚽" },
    { id: 3, name: "Basketball", icon: "🏀" },
    { id: 4, name: "Tennis", icon: "🎾" },
    { id: 5, name: "Formula 1", icon: "🏎️" },
    { id: 6, name: "Baseball", icon: "⚾" },
    { id: 7, name: "Hockey", icon: "🏒" },
    { id: 8, name: "Volleyball", icon: "🏐" }
];

const matches = [
    {
        id: 1,
        sport: "Cricket",
        team1: "India",
        team2: "Australia",
        score1: "156/4",
        score2: "152/8",
        status: "LIVE",
        date: "Today",
        competition: "International",
        overs: "18.2",
        runRate: 8.52,
        commentary: [
            { over: "18.2", text: "Short ball, pulled to the boundary", type: "FOUR", key: true },
            { over: "18.1", text: "Full outside off, driven for a single", type: "RUN", key: false },
            { over: "17.6", text: "Yorker, blocked out", type: "DOT", key: false },
            { over: "17.5", text: "Short of length, defended", type: "DOT", key: false },
            { over: "17.4", text: "Outside edged, four!", type: "FOUR", key: true },
            { over: "17.3", text: "Back of length, defended", type: "DOT", key: false },
            { over: "17.2", text: "Slower one, missed", type: "RUN", key: false },
            { over: "17.1", text: "Wide down the leg side", type: "WIDE", key: false }
        ],
        highlights: [
            { over: 18, summary: "14 runs off the over", videoUrl: "" },
            { over: 17, summary: "5 runs off the over", videoUrl: "" },
            { over: 12, summary: "Wicket - top edge to fine leg", videoUrl: "" }
        ],
        statistics: [
            { label: "Possession", value: "55%" },
            { label: "Shots on Target", value: "8" },
            { label: "Corner Kicks", value: "4" }
        ]
    },
    {
        id: 2,
        sport: "Football",
        team1: "Brazil",
        team2: "Germany",
        score1: "2",
        score2: "1",
        status: "LIVE",
        date: "Today",
        competition: "World Cup",
        minute: "67",
        commentary: [
            { minute: "67", text: "Goal! Neymar scores from a free kick", type: "GOAL", key: true },
            { minute: "66", text: "Corner kick for Brazil", type: "CORNER", key: false },
            { minute: "65", text: "Offside against Germany", type: "OFFSIDE", key: false },
            { minute: "64", text: "Shot saved by Neuer", type: "SAVE", key: false },
            { minute: "63", text: "Foul by Kroos", type: "FOUL", key: false }
        ],
        highlights: [
            { minute: 67, summary: "Neymar free kick goal", videoUrl: "" },
            { minute: 23, summary: "Müller header goal", videoUrl: "" }
        ],
        statistics: [
            { label: "Possession", value: "48%" },
            { label: "Shots on Target", value: "6" },
            { label: "Corner Kicks", value: "3" }
        ]
    },
    {
        id: 3,
        sport: "Basketball",
        team1: "Lakers",
        team2: "Warriors",
        score1: "108",
        score2: "102",
        status: "LIVE",
        date: "Today",
        competition: "NBA",
        quarter: "4th",
        timeLeft: "2:15",
        commentary: [
            { quarter: "4th", time: "2:15", text: "LeBron James drives and scores", type: "POINTS", key: true },
            { quarter: "4th", time: "2:00", text: "Curry three-pointer", type: "THREE", key: true },
            { quarter: "4th", time: "1:45", text: "Defensive rebound by Davis", type: "REBOUND", key: false },
            { quarter: "4th", time: "1:30", text: "Turnover by Warriors", type: "TURNOVER", key: false }
        ],
        highlights: [
            { quarter: "4th", time: "2:15", summary: "LeBron James layup", videoUrl: "" },
            { quarter: "3rd", time: "0:05", summary: "Curry step-back three", videoUrl: "" }
        ],
        statistics: [
            { label: "Field Goal %", value: "48%" },
            { label: "Rebounds", value: "42" },
            { label: "Assists", value: "15" }
        ]
    },
    {
        id: 4,
        sport: "Tennis",
        team1: "Nadal",
        team2: "Djokovic",
        score1: "6-4, 3-6, 5-4",
        score2: "",
        status: "LIVE",
        date: "Today",
        competition: "Wimbledon",
        set: "3rd",
        game: "5-4",
        commentary: [
            { set: "3rd", game: "5-4", text: "Nadal serves an ace", type: "ACE", key: true },
            { set: "3rd", game: "5-3", text: "Djokovic backhand winner", type: "WINNER", key: true },
            { set: "3rd", game: "5-2", text: "Nadal forehand error", type: "ERROR", key: false }
        ],
        highlights: [
            { set: "3rd", game: 5, summary: "Nadal ace to win game", videoUrl: "" },
            { set: "2nd", game: 6, summary: "Djokovic break point conversion", videoUrl: "" }
        ],
        statistics: [
            { label: "Aces", value: "12" },
            { label: "Double Faults", value: "2" },
            { label: "Break Points Saved", value: "7" }
        ]
    },
    {
        id: 5,
        sport: "Formula 1",
        team1: "Verstappen (Red Bull)",
        team2: "Hamilton (Mercedes)",
        score1: "1:23.456",
        score2: "1:23.789",
        status: "LIVE",
        date: "Today",
        competition: "Monaco GP",
        lap: "45/78",
        commentary: [
            { lap: "45", text: "Verstappen sets fastest lap", type: "FASTEST_LAP", key: true },
            { lap: "44", text: "Hamilton pits for new tires", type: "PIT_STOP", key: false },
            { lap: "43", text: "Safety car deployed", type: "SAFETY_CAR", key: true }
        ],
        highlights: [
            { lap: 45, summary: "Fastest lap by Verstappen", videoUrl: "" },
            { lap: 40, summary: "Hamilton overtakes Leclerc", videoUrl: "" }
        ],
        statistics: [
            { label: "Top Speed", value: "320 km/h" },
            { label: "Tire Wear", value: "Medium" },
            { label: "Fuel Remaining", value: "60%" }
        ]
    }
    // More matches can be added for upcoming and past
];

// Add some upcoming and past matches
matches.push({
    id: 6,
    sport: "Cricket",
    team1: "England",
    team2: "New Zealand",
    score1: "",
    score2: "",
    status: "UPCOMING",
    date: "Tomorrow",
    time: "10:00 AM",
    competition: "ODI Series"
});

matches.push({
    id: 7,
    sport: "Football",
    team1: "Spain",
    team2: "Italy",
    score1: "",
    score2: "",
    status: "UPCOMING",
    date: "Day After Tomorrow",
    time: "3:00 PM",
    competition: "Euro Qualifiers"
});

matches.push({
    id: 8,
    sport: "Basketball",
    team1: "Celtics",
    team2: "Knicks",
    score1: "112",
    score2: "107",
    status: "COMPLETED",
    date: "Yesterday",
    competition: "NBA"
});

matches.push({
    id: 9,
    sport: "Tennis",
    team1: "Serena Williams",
    team2: "Venus Williams",
    score1: "6-3, 6-4",
    score2: "",
    status: "COMPLETED",
    date: "Yesterday",
    competition: "Wimbledon"
});

const players = [
    {
        id: 1,
        name: "Virat Kohli",
        sport: "Cricket",
        team: "India",
        matches: 250,
        stat1: "12000 Runs",
        stat2: "45.50 Average"
    },
    {
        id: 2,
        name: "Lionel Messi",
        sport: "Football",
        team: "Argentina",
        matches: 180,
        stat1: "800 Goals",
        stat2: "350 Assists"
    },
    {
        id: 3,
        name: "LeBron James",
        sport: "Basketball",
        team: "Lakers",
        matches: 1200,
        stat1: "35000 Points",
        stat2: "9000 Rebounds"
    },
    {
        id: 4,
        name: "Roger Federer",
        sport: "Tennis",
        team: "Switzerland",
        matches: 1500,
        stat1: "103 Titles",
        stat2: "20 Grand Slams"
    },
    {
        id: 5,
        name: "Lewis Hamilton",
        sport: "Formula 1",
        team: "Mercedes",
        matches: 300,
        stat1: "103 Wins",
        stat2: "190 Podiums"
    }
];

// DOM Elements
const sportsGrid = document.getElementById('sportsGrid');
const matchesContainer = document.getElementById('matchesContainer');
const playersGrid = document.getElementById('playersGrid');
const tabButtons = document.querySelectorAll('.tab-btn');
const centreTabButtons = document.querySelectorAll('.centre-tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const matchDetailsModal = document.getElementById('matchDetailsModal');
const profileModal = document.getElementById('profileModal');
const closeButtons = document.querySelectorAll('.close-btn');
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

// State
let selectedSport = null;
let activeMatchTab = 'live'; // live, upcoming, past
let activeCentreTab = 'scoreboard'; // scoreboard, commentary, highlights, statistics
let currentMatch = null;
let scoreboardInterval = null;
let commentaryInterval = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSports();
    renderMatches();
    renderPlayers();
    setupEventListeners();
    loadProfile();
});

// Render Sports
function renderSports() {
    sportsGrid.innerHTML = '';
    sports.forEach(sport => {
        const sportCard = document.createElement('div');
        sportCard.className = 'sport-card';
        sportCard.innerHTML = `
            <div class="sport-icon">${sport.icon}</div>
            <h3>${sport.name}</h3>
        `;
        sportCard.addEventListener('click', () => {
            selectSport(sport.name);
        });
        sportsGrid.appendChild(sportCard);
    });
}

// Select Sport
function selectSport(sportName) {
    selectedSport = sportName === 'All' ? null : sportName;
    renderMatches();
    renderPlayers();
    
    // Update active sport button (if we had a sports button in nav)
    // For now, we just highlight the selected sport card
    document.querySelectorAll('.sport-card').forEach(card => {
        if (card.querySelector('h3').textContent === sportName) {
            card.classList.add('active-sport');
        } else {
            card.classList.remove('active-sport');
        }
    });
}

// Render Matches
function renderMatches() {
    matchesContainer.innerHTML = '';
    
    let filteredMatches = matches;
    if (selectedSport) {
        filteredMatches = matches.filter(match => match.sport === selectedSport);
    }
    
    // Filter by tab (live, upcoming, past)
    if (activeMatchTab === 'live') {
        filteredMatches = filteredMatches.filter(match => match.status === 'LIVE');
    } else if (activeMatchTab === 'upcoming') {
        filteredMatches = filteredMatches.filter(match => match.status === 'UPCOMING');
    } else if (activeMatchTab === 'past') {
        filteredMatches = filteredMatches.filter(match => match.status === 'COMPLETED');
    }
    
    if (filteredMatches.length === 0) {
        matchesContainer.innerHTML = '<p>No matches found.</p>';
        return;
    }
    
    filteredMatches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = `match-card ${match.status.toLowerCase()}`;
        matchCard.innerHTML = `
            <h3>${match.team1} vs ${match.team2}</h3>
            <div class="teams">
                <span>${match.team1}</span>
                <span>${match.team2}</span>
            </div>
            <div class="score">${match.score1} - ${match.score2}</div>
            <div class="status ${match.status.toLowerCase()}">${match.status}</div>
            <div class="date">${match.date}${match.time ? ' ' + match.time : ''}</div>
            ${match.competition ? `<div class="competition">${match.competition}</div>` : ''}
        `;
        matchCard.addEventListener('click', () => {
            openMatchDetails(match);
        });
        matchesContainer.appendChild(matchCard);
    });
}

// Render Players
function renderPlayers() {
    playersGrid.innerHTML = '';
    
    let filteredPlayers = players;
    if (selectedSport) {
        filteredPlayers = players.filter(player => player.sport === selectedSport);
    }
    
    filteredPlayers.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${player.name}">
            <h3>${player.name}</h3>
            <div class="team">${player.team}</div>
            <div class="stats">
                <div>Matches: ${player.matches}</div>
                <div>${player.stat1}</div>
                <div>${player.stat2}</div>
            </div>
        `;
        playersGrid.appendChild(playerCard);
    });
}

// Open Match Details Modal
function openMatchDetails(match) {
    currentMatch = match;
    populateMatchDetails();
    matchDetailsModal.style.display = 'block';
    activateCentreTab('scoreboard');
    startLiveUpdates();
}

// Populate Match Details
function populateMatchDetails() {
    const matchHeader = document.querySelector('.match-header');
    matchHeader.innerHTML = `
        <div class="team-info">
            <div class="team">
                <div class="team-name">${currentMatch.team1}</div>
                <div class="team-score">${currentMatch.score1}</div>
            </div>
            <div class="vs">VS</div>
            <div class="team">
                <div class="team-name">${currentMatch.team2}</div>
                <div class="team-score">${currentMatch.score2}</div>
            </div>
        </div>
        <div class="match-info">
            <div>Status: <span class="status ${currentMatch.status.toLowerCase()}">${currentMatch.status}</span></div>
            <div>Competition: ${currentMatch.competition || 'N/A'}</div>
            <div>Date: ${currentMatch.date}${currentMatch.time ? ' ' + currentMatch.time : ''}</div>
        </div>
    `;
    
    // Populate tabs
    populateScoreboardTab();
    populateCommentaryTab();
    populateHighlightsTab();
    populateStatisticsTab();
}

// Populate Scoreboard Tab
function populateScoreboardTab() {
    const scoreboardTab = document.getElementById('scoreboardTab');
    scoreboardTab.innerHTML = `
        <div class="scoreboard">
            <div class="teams">
                <div class="team">
                    <div class="team-name">${currentMatch.team1}</div>
                    <div class="score">${currentMatch.score1}</div>
                    ${currentMatch.overs ? `<div class="overs">${currentMatch.overs} Overs</div>` : ''}
                    ${currentMatch.minute ? `<div class="minute">${currentMatch.minute}'</div>` : ''}
                    ${currentMatch.quarter ? `<div class="quarter">${currentMatch.quarter}</div>` : ''}
                    ${currentMatch.set ? `<div class="set">Set ${currentMatch.set}</div>` : ''}
                    ${currentMatch.lap ? `<div class="lap">Lap ${currentMatch.lap}</div>` : ''}
                </div>
                <div class="team">
                    <div class="team-name">${currentMatch.team2}</div>
                    <div class="score">${currentMatch.score2}</div>
                    ${currentMatch.overs ? `<div class="overs">${currentMatch.overs} Overs</div>` : ''}
                    ${currentMatch.minute ? `<div class="minute">${currentMatch.minute}'</div>` : ''}
                    ${currentMatch.quarter ? `<div class="quarter">${currentMatch.quarter}</div>` : ''}
                    ${currentMatch.set ? `<div class="set">Set ${currentMatch.set}</div>` : ''}
                    ${currentMatch.lap ? `<div class="lap">Lap ${currentMatch.lap}</div>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Populate Commentary Tab
function populateCommentaryTab() {
    const commentaryTab = document.getElementById('commentaryTab');
    commentaryTab.innerHTML = `
        <div class="commentary-controls">
            <button id="filterAll">All</button>
            <button id="filterKey">Key Moments</button>
        </div>
        <div class="commentary-feed" id="commentaryFeed">
            <!-- Commentary entries will be added here -->
        </div>
    `;
    
    // Add existing commentary entries
    const commentaryFeed = document.getElementById('commentaryFeed');
    if (currentMatch.commentary && currentMatch.commentary.length > 0) {
        // We'll add in reverse order (newest first) as per the plan
        currentMatch.commentary.slice().reverse().forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'commentary-entry';
            entryDiv.innerHTML = `
                <div class="over">${entry.over || entry.minute || entry.time || entry.quarter || entry.set || entry.lap}</div>
                <div class="text">${entry.text}</div>
                <div class="type-tag ${entry.type}">${entry.type}</div>
            `;
            commentaryFeed.appendChild(entryDiv);
        });
    }
    
    // Add event listeners for filter buttons
    document.getElementById('filterAll').addEventListener('click', () => filterCommentary('all'));
    document.getElementById('filterKey').addEventListener('click', () => filterCommentary('key'));
}

// Populate Highlights Tab
function populateHighlightsTab() {
    const highlightsTab = document.getElementById('highlightsTab');
    highlightsTab.innerHTML = `
        <div class="highlight-overs-grid" id="highlightsGrid">
            <!-- Highlight cards will be added here -->
        </div>
    `;
    
    const highlightsGrid = document.getElementById('highlightsGrid');
    if (currentMatch.highlights && currentMatch.highlights.length > 0) {
        currentMatch.highlights.forEach(highlight => {
            const highlightCard = document.createElement('div');
            highlightCard.className = 'highlight-card';
            highlightCard.innerHTML = `
                <div class="over-number">${highlight.over || highlight.minute || highlight.time || highlight.quarter || highlight.set || highlight.lap}</div>
                <div class="summary">${highlight.summary}</div>
                ${highlight.videoUrl ? `<div class="video-url">Video available</div>` : ''}
            `;
            highlightsGrid.appendChild(highlightCard);
        });
    }
}

// Populate Statistics Tab
function populateStatisticsTab() {
    const statisticsTab = document.getElementById('statisticsTab');
    statisticsTab.innerHTML = `
        <div class="match-statistics" id="matchStatistics">
            <!-- Statistics cards will be added here -->
        </div>
    `;
    
    const matchStatistics = document.getElementById('matchStatistics');
    if (currentMatch.statistics && currentMatch.statistics.length > 0) {
        currentMatch.statistics.forEach(stat => {
            const statCard = document.createElement('div');
            statCard.className = 'stat-card';
            statCard.innerHTML = `
                <div class="label">${stat.label}</div>
                <div class="value">${stat.value}</div>
            `;
            matchStatistics.appendChild(statCard);
        });
    }
}

// Filter Commentary
function filterCommentary(filter) {
    const commentaryFeed = document.getElementById('commentaryFeed');
    const entries = commentaryFeed.getElementsByClassName('commentary-entry');
    
    Array.from(entries).forEach(entry => {
        const typeTag = entry.querySelector('.type-tag');
        const isKey = typeTag && ['FOUR', 'SIX', 'WICKET', 'GOAL', 'ACE', 'WINNER', 'FASTEST_LAP', 'PIT_STOP', 'SAFETY_CAR'].includes(typeTag.textContent);
        
        if (filter === 'all' || (filter === 'key' && isKey)) {
            entry.style.display = 'flex';
        } else {
            entry.style.display = 'none';
        }
    });
}

// Start Live Updates (for LIVE matches)
function startLiveUpdates() {
    if (currentMatch.status !== 'LIVE') return;
    
    // Clear any existing intervals
    clearInterval(scoreboardInterval);
    clearInterval(commentaryInterval);
    
    // Update scoreboard every 5 seconds
    scoreboardInterval = setInterval(() => {
        updateScoreboard();
    }, 5000);
    
    // Add new commentary entry every 8 seconds (simulate live)
    commentaryInterval = setInterval(() => {
        addCommentaryEntry();
    }, 8000);
}

// Update Scoreboard (simulate changes)
function updateScoreboard() {
    // In a real app, this would fetch new data from an API
    // For now, we'll just simulate minor changes
    if (!currentMatch) return;
    
    // Simulate score changes based on sport
    if (currentMatch.sport === 'Cricket') {
        // Simulate runs and wickets
        const score1Parts = currentMatch.score1.split('/');
        const runs1 = parseInt(score1Parts[0]);
        const wickets1 = parseInt(score1Parts[1]);
        const score2Parts = currentMatch.score2.split('/');
        const runs2 = parseInt(score2Parts[0]);
        const wickets2 = parseInt(score2Parts[1]);
        
        // Randomly increment runs or wickets
        if (Math.random() > 0.7) {
            currentMatch.score1 = (runs1 + Math.floor(Math.random() * 6)) + '/' + wickets1;
        }
        if (Math.random() > 0.7) {
            currentMatch.score2 = (runs2 + Math.floor(Math.random() * 6)) + '/' + wickets2;
        }
        
        // Update overs
        const oversParts = currentMatch.overs.split('.');
        let overs = parseFloat(oversParts[0]) + parseFloat('0.' + oversParts[1]) / 6;
        overs += Math.random() * 0.1;
        const newOvers = Math.floor(overs) + '.' + ((overs * 6) % 6).toFixed(0);
        currentMatch.overs = newOvers.toString();
        
        // Update run rate
        currentMatch.runRate = ((parseInt(currentMatch.score1.split('/')[0]) / parseFloat(currentMatch.overs)) * 6).toFixed(2);
    }
    
    // Update the scoreboard display
    populateScoreboardTab();
}

// Add Commentary Entry (simulate live)
function addCommentaryEntry() {
    if (!currentMatch) return;
    
    // Generate a random commentary entry based on sport
    let newEntry = {};
    const sportsTypes = {
        Cricket: ['FOUR', 'SIX', 'WICKET', 'RUN', 'DOT', 'WIDE', 'NO_BALL'],
        Football: ['GOAL', 'SHOT', 'SAVE', 'CORNER', 'FOUL', 'OFFSIDE', 'YELLOW_CARD'],
        Basketball: ['POINTS', 'THREE', 'REBOUND', 'ASSIST', 'STEAL', 'TURNOVER', 'FOUL'],
        Tennis: ['ACE', 'WINNER', 'ERROR', 'FAULT', 'LET'],
        'Formula 1': ['FASTEST_LAP', 'PIT_STOP', 'SAFETY_CAR', 'OVERTAKE', 'CRASH'],
        Baseball: ['HOME_RUN', 'RUN', 'OUT', 'STRIKE', 'BALL', 'DOUBLE', 'TRIPLE'],
        Hockey: ['GOAL', 'ASSIST', 'SAVE', 'PENALTY', 'FACEOFF'],
        Volleyball: ['POINT', 'ACE', 'BLOCK', 'DIG', 'SET']
    };
    
    const types = sportsTypes[currentMatch.sport] || ['RUN'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    // Determine if it's a key moment
    const keyTypes = {
        Cricket: ['FOUR', 'SIX', 'WICKET'],
        Football: ['GOAL'],
        Basketball: ['POINTS', 'THREE'],
        Tennis: ['ACE', 'WINNER'],
        'Formula 1': ['FASTEST_LAP', 'OVERTAKE'],
        Baseball: ['HOME_RUN'],
        Hockey: ['GOAL'],
        Volleyball: ['POINT', 'ACE']
    };
    const isKey = keyTypes[currentMatch.sport] && keyTypes[currentMatch.sport].includes(type);
    
    // Create text based on type and sport
    let text = '';
    switch (type) {
        case 'FOUR':
            text = 'Batted to the boundary for four runs';
            break;
        case 'SIX':
            text = 'Smashed over the ropes for six';
            break;
        case 'WICKET':
            text = 'Taken! Bowled out';
            break;
        case 'RUN':
            text = 'Single run taken';
            break;
        case 'DOT':
            text = 'Dot ball, no runs';
            break;
        case 'WIDE':
            text = 'Wide ball called';
            break;
        case 'NO_BALL':
            text = 'No ball, free hit';
            break;
        case 'GOAL':
            text = 'GOAL! Scored past the goalkeeper';
            break;
        case 'SHOT':
            text = 'Shot on target';
            break;
        case 'SAVE':
            text = 'Saved by the goalkeeper';
            break;
        case 'CORNER':
            text = 'Corner kick awarded';
            break;
        case 'FOUL':
            text = 'Foul given';
            break;
        case 'OFFSIDE':
            text = 'Offside called';
            break;
        case 'YELLOW_CARD':
            text = 'Yellow card shown';
            break;
        case 'POINTS':
            text = 'Scored two points';
            break;
        case 'THREE':
            text = 'Three-pointer made';
            break;
        case 'REBOUND':
            text = 'Secured a rebound';
            break;
        case 'ASSIST':
            text = 'Assist made';
            break;
        case 'STEAL':
            text = 'Stole the ball';
            break;
        case 'TURNOVER':
            text = 'Turnover committed';
            break;
        case 'ACE':
            text = 'Ace served';
            break;
        case 'WINNER':
            text = 'Winner hit';
            break;
        case 'ERROR':
            text = 'Unforced error';
            break;
        case 'FAULT':
            text = 'Fault served';
            break;
        case 'LET':
            text = 'Let called';
            break;
        case 'FASTEST_LAP':
            text = 'Fastest lap recorded';
            break;
        case 'PIT_STOP':
            text = 'Pit stop completed';
            break;
        case 'SAFETY_CAR':
            text = 'Safety car deployed';
            break;
        case 'OVERTAKE':
            text = 'Overtake maneuver';
            break;
        case 'CRASH':
            text = 'Crash on track';
            break;
        case 'HOME_RUN':
            text = 'Home run! Ball out of the park';
            break;
        case 'DOUBLE':
            text = 'Double hit';
            break;
        case 'TRIPLE':
            text = 'Triple hit';
            break;
        case 'OUT':
            text = 'Player out';
            break;
        case 'STRIKE':
            text = 'Strike called';
            break;
        case 'BALL':
            text = 'Ball called';
            break;
        case 'POINT':
            text = 'Point won';
            break;
        case 'BLOCK':
            text = 'Block at the net';
            break;
        case 'DIG':
            text = 'Dig saved';
            break;
        case 'SET':
            text = 'Set completed';
            break;
        default:
            text = 'Play occurred';
    }
    
    // Determine over/minute/etc. based on sport
    if (currentMatch.sport === 'Cricket') {
        const oversParts = currentMatch.overs.split('.');
        let overs = parseFloat(oversParts[0]) + parseFloat('0.' + oversParts[1]) / 6;
        overs += 0.1; // Increment by one ball
        const newOvers = Math.floor(overs) + '.' + ((overs * 6) % 6).toFixed(0);
        newEntry = { over: newOvers.toString(), text, type, key: isKey };
    } else if (currentMatch.sport === 'Football') {
        const minute = parseInt(currentMatch.minute) || 0;
        newEntry = { minute: (minute + 1).toString(), text, type, key: isKey };
    } else if (currentMatch.sport === 'Basketball') {
        // Simulate time in quarter
        newEntry = { quarter: currentMatch.quarter, time: `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`, text, type, key: isKey };
    } else if (currentMatch.sport === 'Tennis') {
        newEntry = { set: currentMatch.set, game: `${Math.floor(Math.random() * 6)}-${Math.floor(Math.random() * 6)}`, text, type, key: isKey };
    } else if (currentMatch.sport === 'Formula 1') {
        newEntry = { lap: `${parseInt(currentMatch.lap.split('/')[0]) + 1}/${currentMatch.lap.split('/')[1]}`, text, type, key: isKey };
    } else {
        // Default
        newEntry = { over: "0.0", text, type, key: isKey };
    }
    
    // Add to commentary array (at the beginning to show newest first)
    if (!currentMatch.commentary) currentMatch.commentary = [];
    currentMatch.commentary.unshift(newEntry);
    
    // If it's a key moment, also add to highlights
    if (isKey) {
        if (!currentMatch.highlights) currentMatch.highlights = [];
        const highlight = {
            over: newEntry.over || newEntry.minute || newEntry.time || newEntry.quarter || newEntry.set || newEntry.lap,
            summary: text.substring(0, 50) + '...',
            videoUrl: ""
        };
        currentMatch.highlights.unshift(highlight);
    }
    
    // Update the commentary display
    const commentaryFeed = document.getElementById('commentaryFeed');
    const entryDiv = document.createElement('div');
    entryDiv.className = 'commentary-entry';
    entryDiv.innerHTML = `
        <div class="over">${newEntry.over || newEntry.minute || newEntry.time || newEntry.quarter || newEntry.set || newEntry.lap}</div>
        <div class="text">${newEntry.text}</div>
        <div class="type-tag ${newEntry.type}">${newEntry.type}</div>
    `;
    // Add to the top (newest first)
    commentaryFeed.insertBefore(entryDiv, commentaryFeed.firstChild);
    
    // Update highlights display if needed
    if (isKey) {
        const highlightsGrid = document.getElementById('highlightsGrid');
        const highlightCard = document.createElement('div');
        highlightCard.className = 'highlight-card';
        highlightCard.innerHTML = `
            <div class="over-number">${highlight.over}</div>
            <div class="summary">${highlight.summary}</div>
            ${highlight.videoUrl ? `<div class="video-url">Video available</div>` : ''}
        `;
        highlightsGrid.insertBefore(highlightCard, highlightsGrid.firstChild);
    }
}

// Stop Live Updates
function stopLiveUpdates() {
    clearInterval(scoreboardInterval);
    clearInterval(commentaryInterval);
}

// Activate Centre Tab
function activateCentreTab(tabName) {
    activeCentreTab = tabName;
    centreTabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === tabName + 'Tab');
    });
}

// Event Listeners
function setupEventListeners() {
    // Tab buttons for matches
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            activeMatchTab = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderMatches();
        });
    });
    
    // Centre tab buttons
    centreTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            activateCentreTab(button.dataset.tab);
        });
    });
    
    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            matchDetailsModal.style.display = 'none';
            profileModal.style.display = 'none';
            stopLiveUpdates();
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === matchDetailsModal) {
            matchDetailsModal.style.display = 'none';
            stopLiveUpdates();
        }
        if (e.target === profileModal) {
            profileModal.style.display = 'none';
        }
    });
    
    // Search button
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// Perform Search
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;
    
    // Search in matches
    const matchingMatches = matches.filter(match => 
        match.team1.toLowerCase().includes(query) || 
        match.team2.toLowerCase().includes(query) ||
        match.sport.toLowerCase().includes(query) ||
        match.competition?.toLowerCase().includes(query)
    );
    
    // Search in players
    const matchingPlayers = players.filter(player => 
        player.name.toLowerCase().includes(query) ||
        player.team.toLowerCase().includes(query) ||
        player.sport.toLowerCase().includes(query)
    );
    
    // For simplicity, we'll just show matches in the matches section
    // In a full app, we might have a search results page
    if (matchingMatches.length > 0) {
        // Temporarily set selectedSport to null to show all sports, then filter matches
        selectedSport = null;
        activeMatchTab = 'live'; // Show live tab by default
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.tab-btn[data-tab="live"]').classList.add('active');
        matchesContainer.innerHTML = ''; // Clear
        
        matchingMatches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = `match-card ${match.status.toLowerCase()}`;
            matchCard.innerHTML = `
                <h3>${match.team1} vs ${match.team2}</h3>
                <div class="teams">
                    <span>${match.team1}</span>
                    <span>${match.team2}</span>
                </div>
                <div class="score">${match.score1} - ${match.score2}</div>
                <div class="status ${match.status.toLowerCase()}">${match.status}</div>
                <div class="date">${match.date}${match.time ? ' ' + match.time : ''}</div>
                ${match.competition ? `<div class="competition">${match.competition}</div>` : ''}
            `;
            matchCard.addEventListener('click', () => {
                openMatchDetails(match);
            });
            matchesContainer.appendChild(matchCard);
        });
        
        if (matchingMatches.length === 0) {
            matchesContainer.innerHTML = '<p>No matches found.</p>';
        }
    } else {
        matchesContainer.innerHTML = '<p>No matches found.</p>';
    }
    
    // Clear search input after a moment
    setTimeout(() => {
        searchInput.value = '';
    }, 2000);
}

// Profile Management
function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('sportzoneProfile')) || {
        name: 'Guest',
        favoriteSports: [],
        favoriteTeams: [],
        favoritePlayers: [],
        recentlyViewed: []
    };
    
    // Display profile in modal
    const profileInfo = document.querySelector('.profile-info');
    profileInfo.innerHTML = `
        <div class="profile-section">
            <h3>Profile Info</h3>
            <p><strong>Name:</strong> ${profile.name}</p>
        </div>
        <div class="profile-section">
            <h3>Favorite Sports</h3>
            <ul>
                ${profile.favoriteSports.map(sport => `<li>${sport}</li>`).join('')}
            </ul>
        </div>
        <div class="profile-section">
            <h3>Favorite Teams</h3>
            <ul>
                ${profile.favoriteTeams.map(team => `<li>${team}</li>`).join('')}
            </ul>
        </div>
        <div class="profile-section">
            <h3>Favorite Players</h3>
            <ul>
                ${profile.favoritePlayers.map(player => `<li>${player}</li>`).join('')}
            </ul>
        </div>
        <div class="profile-section">
            <h3>Recently Viewed</h3>
            <ul>
                ${profile.recentlyViewed.map(match => `<li>${match.team1} vs ${match.team2}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Add to recently viewed when opening a match (we'll do this in openMatchDetails)
}

// Save Profile
function saveProfile(profile) {
    localStorage.setItem('sportzoneProfile', JSON.stringify(profile));
}

// Add to recently viewed
function addToRecentlyViewed(match) {
    const profile = JSON.parse(localStorage.getItem('sportzoneProfile')) || {
        name: 'Guest',
        favoriteSports: [],
        favoriteTeams: [],
        favoritePlayers: [],
        recentlyViewed: []
    };
    
    // Add match to recently viewed (avoid duplicates)
    const matchStr = `${match.team1} vs ${match.team2}`;
    profile.recentlyViewed = profile.recentlyViewed.filter(m => 
        `${m.team1} vs ${m.team2}` !== matchStr
    );
    profile.recentlyViewed.unshift({team1: match.team1, team2: match.team2});
    
    // Keep only last 5
    if (profile.recentlyViewed.length > 5) {
        profile.recentlyViewed.pop();
    }
    
    saveProfile(profile);
}

// Modify openMatchDetails to add to recently viewed
const originalOpenMatchDetails = openMatchDetails;
openMatchDetails = function(match) {
    addToRecentlyViewed(match);
    originalOpenMatchDetails.call(this, match);
};

// Initialize sports section title based on selected sport
function updateSportsSectionTitle() {
    const sportsSectionTitle = document.querySelector('#sportsSection h2');
    if (selectedSport) {
        sportsSectionTitle.textContent = `${selectedSport} Matches`;
    } else {
        sportsSectionTitle.textContent = 'Select a Sport';
    }
}

// Call when sport is selected
const originalSelectSport = selectSport;
selectSport = function(sportName) {
    originalSelectSport.call(this, sportName);
    updateSportsSectionTitle();
};

// Initial update
updateSportsSectionTitle();