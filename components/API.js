import axios from 'axios';

export const calcCar = async(vehicleMake, vehicleModel, distanceNum) => {
    const options = 
    {
        method: 'POST',
        url: 'https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_model',
        headers: 
        {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
            'X-RapidAPI-Key': '02963891f2mshac0cd3b17802228p13c412jsn5b4754ee85f7',
            'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
        },

        data: 
        {
            vehicle_make: vehicleMake,
            vehicle_model: vehicleModel,
            distance_value: distanceNum,  
            distance_unit: 'km'
        }
    };
    try 
    {
        console.log('Calculating...');
        const response = await axios.request(options);
        if(response.status !== 200) 
        {
            throw new Error('Request failed with status ' + response.status);
        }
        const result = response.data;
        if(response.data.error) 
        {
            throw new Error(response.data.error);
        }
        if(!result) 
        {
            throw new Error('No result');
        }
        console.log('Result:', result);
        console.log('co2:', result.data.co2e_kg);
        if(!result.data.co2e_kg) 
        {
            throw new Error('co2e_kg missing');
        }
        return result.data.co2e_kg;
    } 
    catch (error) 
    {
        console.error(error);
    }
}

export const calcPublicTransport = async(type, distanceNum) => {
    const options = 
    {
        method: 'GET',
        url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit',
        headers: 
        {
            'X-RapidAPI-Key': '02963891f2mshac0cd3b17802228p13c412jsn5b4754ee85f7',
            'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
        },

        params: 
        {
            distance: distanceNum,
            type: type,
        }
    };
    try 
    {
        console.log('Calculating...');
        const response = await axios.request(options);
        if(response.status !== 200) 
        {
            throw new Error('Request failed with status ' + response.status);
        }
        const result = response.data;
        if(response.data.error) 
        {
            throw new Error(response.data.error);
        }
        if(!result) 
        {
            throw new Error('No result');
        }
        console.log('Result:', result);
        console.log('co2:', result.carbonEquivalent);
        if(!result.carbonEquivalent) 
        {
            throw new Error('co2e_kg missing');
        }
        return result.carbonEquivalent;
    } 
    catch (error) 
    {
        console.error(error);
    }
}

export const calcAirTravel = async(departure, arrival, numberP) => {
    const options = 
    {
        method: 'POST',
        url: 'https://carbonsutra1.p.rapidapi.com/flight_estimate',
        headers: 
        {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
            'X-RapidAPI-Key': '02963891f2mshac0cd3b17802228p13c412jsn5b4754ee85f7',
            'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
        },

        data: 
        {
            iata_airport_from: departure,
            iata_airport_to: arrival,
            number_of_passengers: numberP,  
        }
    };
    try 
    {
        console.log('Calculating...');
        const response = await axios.request(options);
        if(response.status !== 200) 
        {
            throw new Error('Request failed with status ' + response.status);
        }
        const result = response.data;
        if(response.data.error) 
        {
            throw new Error(response.data.error);
        }
        if(!result) 
        {
            throw new Error('No result');
        }
        console.log('Result:', result);
        console.log('co2:', result.data.co2e_kg);
        if(!result.data.co2e_kg) 
        {
            throw new Error('co2e_kg missing');
        }
        return result.data.co2e_kg;
    } 
    catch (error) 
    {
        console.error(error);
    }
}

export const CalcElec = async(consu, loca) => {
    const options = 
    {
        method: 'POST',
        url: 'https://tracker-for-carbon-footprint-api.p.rapidapi.com/traditionalHydro',
        headers: 
        {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '02963891f2mshac0cd3b17802228p13c412jsn5b4754ee85f7',
            'X-RapidAPI-Host': 'tracker-for-carbon-footprint-api.p.rapidapi.com'
        },

        data: 
        {
            consumption: consu,
            location: loca,
        }
    };
    try 
    {
        console.log('Calculating...');
        const response = await axios.request(options);
        if(response.status !== 200) 
        {
            throw new Error('Request failed with status ' + response.status);
        }
        const result = response.data;
        if(response.data.error) 
        {
            throw new Error(response.data.error);
        }
        if(!result) 
        {
            throw new Error('No result');
        }
        console.log('Result:', result);
        console.log('co2:', result.carbon);
        if(!result.carbon) 
        {
            throw new Error('co2e_kg missing');
        }
        // Extract the numeric value from the string
        const numericValue = result.carbon.match(/\d+\.?\d*/)[0];
        // Convert the numeric value to a float
        const numericResult = parseFloat(numericValue);
        console.log("numeric result: ", numericResult);
        return numericResult;
    } 
    catch (error) 
    {
        console.error(error);
    }
}