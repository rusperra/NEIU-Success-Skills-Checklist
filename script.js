<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campus Success Checklist</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-4">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Campus Success Checklist</h1>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-600 mr-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
                <div>
                    <div class="text-sm font-medium text-gray-500">Overall Progress</div>
                    <div class="flex items-center">
                        <div class="w-64 bg-gray-200 rounded-full h-4 mr-2">
                            <div id="overallProgress" class="bg-indigo-600 h-4 rounded-full" style="width: 0%"></div>
                        </div>
                        <span id="overallProgressText" class="text-lg font-bold text-gray-700">0%</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="checklist-container" class="space-y-6">
            <!-- Content will be added by JavaScript -->
        </div>
        
        <div class="mt-8 text-center text-sm text-gray-500">
            Click on a category header to expand or collapse it. Check off items as you complete them! Your progress will be saved in your browser.
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
