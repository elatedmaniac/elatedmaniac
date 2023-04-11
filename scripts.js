
function createFeedContent(feedData) {
    return feedData.items
        .slice(0, 5)
        .map(
            (item) =>
            `<h4><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h4>`
        )
        .join('');
}
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('twitter-widget');
    iframeResizer({}, iframe);

    iframe.addEventListener('load', () => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background-color: #060608;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #0ff;
        border-radius: 4px;
      }
    `;

        iframe.contentWindow.document.head.appendChild(styleTag);
    });
});

