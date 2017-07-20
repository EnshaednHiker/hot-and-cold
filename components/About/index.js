import React from 'react';
import Dom from 'react-dom';

export default class About extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return (
            <div className="container">
				<div className="row">
                	<div className="col col-md-6-offset-3 col-lg-4-offset-2 col-sm-12">
						<h3>About the game</h3>
						<div>
							<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
							<ul>
								<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
								<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
								<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
								<li>4. You will also receive <strong>relative feedback</strong> so you know whether you're moving in the right direction.</li>
							</ul>
							<p>So, Are you ready?</p>
							<button className="btn btn-default" type="submit">Got It!</button>
						</div>
					</div>
				</div>
            </div>
        )
    }
}



