// Service Worker pour gérer les requêtes Google Suggestions
console.log('Service Worker chargé');

// Fonction pour récupérer les suggestions
async function fetchGoogleSuggestions(query) {
  try {
    console.log('Fetching suggestions for:', query);
    const url = `https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(query)}&output=json`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 secondes timeout

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data received:', data);

    // Google retourne [query, [suggestions], [], {}]
    const suggestions = data[1] || [];
    console.log('Suggestions extracted:', suggestions);

    return { success: true, suggestions };
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return { success: false, suggestions: [], error: error.message };
  }
}

// Listener pour les messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received in service worker:', request);

  if (request.action === 'getGoogleSuggestions') {
    const query = request.query;
    console.log('Request for suggestions:', query);

    // Créer une promesse et la gérer correctement
    (async () => {
      try {
        const result = await fetchGoogleSuggestions(query);
        console.log('Sending response:', result);
        sendResponse(result);
      } catch (error) {
        console.error('Error in message handler:', error);
        sendResponse({ success: false, suggestions: [], error: error.message });
      }
    })();

    // Important: retourner true pour indiquer qu'on va répondre de manière asynchrone
    return true;
  }

  return false;
});

