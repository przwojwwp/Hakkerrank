//petrol, distance
const petrolpumps = [[5, 4], [4, 6], [7, 3], [4, 5]];

function truckTour(petrolpumps)
{
  // Write your code here
  let start = 0;
  let currentPetrol = 0;

  for (let i = 0; i < petrolpumps.length; i++)
  {
    const [petrol, distance] = petrolpumps[i];
    currentPetrol += petrol - distance;

    if (currentPetrol < 0)
    {
      start = i + 1;
      currentPetrol = 0;
    }
  }

  return start;
}

truckTour(petrolpumps);
