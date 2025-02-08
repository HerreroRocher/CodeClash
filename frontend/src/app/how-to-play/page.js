import Logo from '@components/Logo';

export default function HowToPlay() {
return (
    <> 
    <Logo />
    
    <div className=" px-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <header className="mb-8">
            
        </header>
        <h1 className="text-4xl font-bold mb-8 text-center">How to Play CodeClash</h1>
        <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
                Welcome to CodeClash! Follow these steps to get started and become a coding champion:
            </p>
            <ol className="list-decimal list-inside text-lg space-y-4">
                <li>
                    <strong>Create an Account:</strong> Sign up for a new account or log in if you already have one.
                </li>
                <li>
                    <strong>Choose a Challenge:</strong> Browse through the available coding challenges and select one that interests you.
                </li>
                <li>
                    <strong>Solve the Problem:</strong> Use the built-in code editor to write your solution. You can test your code with provided test cases.
                </li>
                <li>
                    <strong>Submit Your Solution:</strong> Once you're confident with your solution, submit it to see if it passes all test cases.
                </li>
                <li>
                    <strong>Climb the Leaderboard:</strong> Earn points for each challenge you solve and climb the leaderboard to become the top coder.
                </li>
                <li>
                    <strong>Challenge Others:</strong> Invite friends or other players to compete in coding battles and see who can solve problems faster.
                </li>
            </ol>
            <p className="text-lg mt-8">
                Have fun and improve your coding skills with CodeClash. Good luck!
            </p>
        </div>
    </div>
    </>
);
}