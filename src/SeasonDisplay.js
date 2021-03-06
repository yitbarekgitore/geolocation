import React from 'react'

const getSeason = (lat, month) => {
    if(month > 3 && month > 8) {
        return lat > 0 ? "Winter" : "Summer"
    }
    else{
        return lat < 0 ? "Summer" : "Winter"
    }
}
const seasonInfo = {
    Winter:{
        text:"It is cold",
        iconName:"snowflake"
    },
    Summer:{
        text:"It is hot",
        iconName:"sun"
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, (new Date()).getMonth())
    const {iconName, text} = seasonInfo[season]
    return (
        <div>
            <i className= {`${iconName} icon`} />
            {text}
        </div>
    )
}

export default SeasonDisplay
