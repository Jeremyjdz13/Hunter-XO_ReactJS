import React from 'react'
import RankChart from './ChartComponent/RankChart'

export default function GameCharts() {
    return (
        <div>
            <div className="add_button-container">
                <div className="game_chart-title">Game Charts</div>
            </div>
            <RankChart />
        </div>
    )
}
