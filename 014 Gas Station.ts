/**
  There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
  
  You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station
  to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
  
  Given two integer arrays gas and cost, return the starting gas station's index if you can travel around
  the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.
*/


function canCompleteCircuit(gas: number[], cost: number[]): number {
    let tank = 0
    let totalGas = 0
    let startStation = 0

    for (let i = 0; i < gas.length; i++) {
        const di = gas[i] - cost[i]
        tank += di
        totalGas += di

        if (tank < 0) { 
            tank = 0
            startStation = i + 1
        }      
    }
    
    return totalGas < 0 ? -1 : startStation
}
