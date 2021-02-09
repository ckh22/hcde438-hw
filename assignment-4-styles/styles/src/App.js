import './scss/main.css'

function App() {
  return (
    <div class="flex-container">
    <nav>
        <div class="nav-content">
            <img src="https://static.thenounproject.com/png/2206184-200.png" alt="" />
            <div>
                Chatter
            </div>
        </div>

    </nav>
    <div class="message-board">
        <div class="messages">
            <div class="message-one">
                <div class="flex-messages">
                    hello this is a message
                </div>

            </div>
            <div class="message-two">
                <div class="flex-messages">
                    hello this is a message
                </div>
            </div>
            <div class="message-three">
                <div class="flex-messages">
                    hello this is a message
                </div>
            </div>
        </div>
    </div>
    <div class="typing-bar">
        <input type="text" />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow/angle-circle-arrow-up.png" alt="" />
    </div>
</div>
  );
}

export default App;
