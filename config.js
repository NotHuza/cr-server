module.exports = {
    content: {
        sha: '33f133cf15b944658f041a533cf1f48f27262076',
        host: 'http://192.168.43.154/Patchs/',
        port: '8080'
    },
    db: {
        host: 'localhost',
        name: 'crServer'
    },
    redis: {
        host: '0.0.0.0',
        port: 6379
    },
    network: {
        maxConnections: 20
    },
    events: [
        {
            id: 100,
            name: '2v2 Button',
            startTime: 1503298800,
            endTime: 1523298800,
            visibleOn: 1503298800,
            type: 8,
            json: JSON.stringify({
                HideTimer: true,
                HidePopupTimer: true,
                ExtraGameModeChance: 0,
                GameMode: 'TeamVsTeamLadder',
                ExtraGameMode: 'None'
            })
        }
    ]
}