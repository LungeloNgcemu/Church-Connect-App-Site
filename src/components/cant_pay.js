// const existingExpireDate = new Date(response); // Parse the existing expiration date

// // Add 30 days to the existing date; the date object is mutated
// existingExpireDate.setDate(existingExpireDate.getDate() + 30);

// // Get the current date
// const currentDate = new Date();

// // Calculate the difference in milliseconds
// const timeDifference = existingExpireDate - currentDate;

// // Convert the difference from milliseconds to days
// const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// // Check if within three days of expiration
// const isWithinThreeDays = daysDifference <= 3;

// if (isWithinThreeDays) {
//     console.log('Within three days of the expiration date.');
// } else {
//     console.log('More than three days from the expiration date.');
// }

// /////////////////////////////////////////////////////////////////////////
// const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// const firstDate = new Date(2008, 1, 12);
// const secondDate = new Date(2008, 1, 22);

// const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));


const paymentCheck = async (churchName) => {

    let expire = null;

    // 1. Get expiry date
    try {
        const { data: churchData, error } = await supabaseConnnection
            .from('Church')
            .select('Expire')
            .eq('ChurchName', churchName)
            .single();

        if (error) {
            console.error('Error fetching data:', error);
            throw new Error('Error fetching church data');
        }

        expire = new Date(churchData["Expire"]);

    } catch (error) {
        console.log("Error getting date: " + error);
        return;
    }

    // 2. Get current date
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight for accurate day calculation

    // 3. Find the difference
    const timeDifference = expire - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // 4. Check if difference is less than or equal to 3
    const isWithinThreeDays = daysDifference <= 3;

    // 5. Alert based on the difference
    if (isWithinThreeDays) {
        //Navigate to make payment.
        console.log('Within three days of the expiration date.');
    } else {
        alert("You canot make payment untill your within three days befor expiry date.")
        console.log('More than three days from the expiration date.');
    }
};
