import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../layout/layout';
import Post from '../../components/post';

const Book4 = () => {
	let disqusConfig = {
		url: `http://localhost:8000/books/proud-to-be-me-part-4`,
		// identifier: `/proud-to-be-me-part-2`,
		title: `Proud To Be Me: Rosalinda Part 4`
	};
	return (
		<Layout className="white-bg" logo={`/logo.png`}>
			<Helmet>
				<title>Proud To Be Me: Rosalinda Part 4</title>
			</Helmet>
			<div className="container" style={{ backgroundColor: '#fff' }}>
				<Post
					disqusConfig={disqusConfig}
					cover={`/part4.png`}
					title={[ 'Proud To Be Me: Rosalinda', <br />, 'Part IV' ]}
				>
					<p>
						Rosalinda continues her journey with more obstacles and adversities
                        crossing her path. The most important day of her career is forthcoming
                        with the one who took the title away from her. She's been looking
                        forward of proving to the world of boxing that she is the best of the
                        best, but only if she beats the champion.
					</p>
					<p>
						She is joined by other female boxers at Simons' gym, her trainer, that
                        he will train and develop a team that will make him proud of his decision
                        of making them great boxers. Simon and the support of concerned women
                        boxers, successfully managed to change the minute rounds from two to three-
                        minute rounds for women boxers who are fighting in championship titles. This
                        allows them a better chance and gives them the opportunity to finish an
                        opponent in a situation for a knockout with the extra minute in each round.
					</p>
					<p>
						Rosalinda's mom becomes ill that will interfere with her career. She also
                        must deal with a tragedy that caused her trainer, Simon, to be sent to the
                        hospital and puts him in a situation with a life threatening and fighting
                        for his life.
					</p>
					<p>
						Rosalinda struggles to get back into her state of fighting, hindering her
                        mind of being the best she could be in the ring. Due to the unexpected
                        adversities, her mind is not yet back to herself when she is faced to fight
                        a challenger from Australia for the title fight. Her biggest challenge now
                        is trying to stay focused and overcome her troubled mind by letting go of
                        the situation with her mom and Simon. She will find out when she steps in
                        the ring and face what will be the most difficult fight in her career.
					</p>
                    {/* <strong>
                        <em>"Protect Yourself at all times."</em>
                    </strong> */}
					<p>
						<strong
							style={{
								display: 'inline-block',
								marginBottom: 5
							}}
						>
							Coming Soon...
						</strong>
						{/* <ul className="tags flex" style={{ marginTop: 0 }}>
							<li>
								<a
									href="https://www.amazon.com/Proud-Be-Me-Rosalinda-Part/dp/164345532X/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span
										style={{
											backgroundColor: '#1180e1',
											color: '#fff'
										}}
									>
										Amazon
									</span>
								</a>
							</li>
							<li>
								<a
									href="https://www.barnesandnoble.com/w/proud-to-be-me-rosalinda-jesse-moreno/1137152740"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span
										style={{
											backgroundColor: '#1180e1',
											color: '#fff'
										}}
									>
										Barnes and Noble
									</span>
								</a>
							</li>
						</ul> */}
					</p>
				</Post>
			</div>
		</Layout>
	);
};

export default Book4;
