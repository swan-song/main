const data = {
  cars: [
    {
      id: 1,
      title: "Ferrari 458 Italia",
      description:
        "The Ferrari 458 Italia is a rear-drive mid-engine supercar powered by a high-revving 4.5-liter V-8 rated at 562 hp and 398 lb-ft of torque that's paired to a seven-speed dual-clutch automatic transmission. Since this is a purpose-built performance car, gas mileage isn't a strong suit at 13/17 mpg city/highway.",
      topSpeed: "202MPH",
      engineType: "4.5L V8",
      transmission: "7-Speed Dual Clutch Automatic",
      hours: 1,
      rate: 400,
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: 2,
      title: "Mercedes SLS AMG",
      description:
        "The Mercedes-Benz SLS AMG is a supercar available in convertible and coupe body styles. Its sole engine is a hand-built 6.2-liter V-8 with 583 hp and 479 lb-ft of torque mated to a seven-speed dual-clutch automatic transmission mounted in the rear axle.",
      topSpeed: "196MPH",
      engineType: "6.2L V8",
      transmission: "7-Speed Dual Clutch Automatic",
      hours: 1,
      rate: 350,
      image:
        "https://images.unsplash.com/photo-1616789916414-23e356323dad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 3,
      title: "Aston Martin Vanquish",
      description:
        "The Aston Martin Vanquish is a grand tourer introduced by British luxury automobile manufacturer Aston Martin in 2001 as a successor to the Aston Martin Vantage (1993).",
      topSpeed: "201MPH",
      engineType: "6.0L V12",
      transmission: "8-Speed Automatic",
      hours: 1,
      rate: 350,
      image:
        "https://images.unsplash.com/photo-1618486613447-553cd00864a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
    },
    {
      id: 4,
      title: "Lamborghini Aventador S",
      description:
        "The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a Spanish fighting bull.",
      topSpeed: "217MPH",
      engineType: "6.5L V12",
      transmission: "7-Speed Automatic",
      hours: 1,
      rate: 400,
      image:
        "https://images.unsplash.com/photo-1612393266591-c32944e815c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: 5,
      title: "Mercedes Maybach",
      description:
        "The 2020 S560 is motivated by a turbocharged 4.0-liter V-8 that produces 463 horsepower and 516 lb-ft of torque. A nine-speed automatic transmission sends power to all four wheels. With the S650, a twin-turbocharged 6.0-liter V-12 does the honors, and it provides 621 horsepower and 738 lb-ft of torque.",
      topSpeed: "155",
      engineType: "6.0L V12",
      transmission: "9-Speed Automatic",
      hours: 1,
      rate: 300,
      image:
        "https://img.autobytel.com/2020/mercedes-benz/maybach-s-650/2-800-oemexteriorfront1300-92281.JPG",
    },
    {
      id: 6,
      title: "Bentley Bentayga",
      description:
        "The Bentley Bentayga is a mid-size, front-engine, all-wheel drive, five-door luxury SUV marketed by Bentley, beginning with model year 2016.",
      topSpeed: "190MPH",
      engineType: "4.0L V8",
      transmission: "8-Speed Automatic",
      hours: 1,
      rate: 400,
      image:
        "https://specials-images.forbesimg.com/imageserve/5d68660f673aa300083c848b/960x0.jpg?fit=scale",
    },
    {
      id: 7,
      title: "McClaren P1",
      description:
        "The Aston Martin Vanquish is a grand tourer introduced by British luxury automobile manufacturer Aston Martin in 2001 as a successor to the Aston Martin Vantage (1993).",
      topSpeed: "201MPH",
      engineType: "6.0L V12",
      transmission: "8-Speed Automatic",
      hours: 1,
      rate: 600,
      image: "https://i.imgur.com/hn1ST2Z.png",
    },
    {
      id: 8,
      title: "Bugatti Veyron",
      description:
        "A worthy successor to the Bugatti Veyron, the Chiron is one of the fastest and most expensive cars on the planet. The Chiron Super Sport 300+ model is arguably the wildest and most extravagant in the range. Equipped with an 8.0-litre 16-cylinder engine rated at 1,577 horsepower, it can reach a top speed of 489 km/h.",
      topSpeed: "300MPH",
      engineType: "8.0L V16",
      transmission: "7-Speed Dual Clutch Automatic",
      hours: 1,
      rate: 700,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-bugatti-chiron-pur-sport-103-1614922610.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 9,
      title: "Nissan GTR",
      description:
        "The Nissan GT-R is a high-performance sports car and grand tourer produced by Nissan that was unveiled in 2007.[2][3][4] It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline.",
      topSpeed: "205MPH",
      engineType: "3.8L V6",
      transmission: "7-Speed Dual Clutch Automatic",
      hours: 1,
      rate: 350,
      image:
        "https://images.unsplash.com/photo-1619329928488-d4bc01e4b100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 10,
      title: "Rolls Royce Phantom",
      description:
        "The Rolls-Royce Phantom is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars.",
      topSpeed: "155MPH",
      engineType: "6.75L V12",
      transmission: "8-Speed Automatic",
      hours: 1,
      rate: 500,
      image:
        "https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2020/01/Rolls-Royce-Phantom-RED-Auction-Front-3Q.jpg",
    },
  ],
};

export default data;
