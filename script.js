function chunkString(str, length) {
    // Handle edge case where the input string is null
    if (str === null) {
        return [];
    }

    // Initialize an array to hold the chunks
    const chunks = [];
    
    // Iterate over the string and slice it into chunks of the specified length
    for (let i = 0; i < str.length; i += length) {
        // Extract a substring from the current index to the next index + length
        chunks.push(str.slice(i, i + length));
    }
    
    return chunks;
}

