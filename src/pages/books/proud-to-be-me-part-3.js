import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../layout/layout';
import Post from '../../components/post';

const Book3 = () => {
	let disqusConfig = {
		url: `http://localhost:8000/books/proud-to-be-me-part-3`,
		// identifier: `/proud-to-be-me-part-2`,
		title: `Proud To Be Me: Rosalinda Part 3`
	};
	return (
		<Layout className="white-bg" logo={`/logo.png`}>
			<Helmet>
				<title>Proud To Be Me: Rosalinda Part 3</title>
			</Helmet>
			<div className="container" style={{ backgroundColor: '#fff' }}>
				<Post
					disqusConfig={disqusConfig}
					cover={`/part3.png`}
					title={[ 'Proud To Be Me: Rosalinda', <br />, 'Part III' ]}
				>
					<p>
						Rosalinda continued her dreams inspite of her adversities, tragical fatal moments, and challengers who challenged her for the title.
					</p>
					<p>
						Because of her will, determination and stimina, the passion from her heart for the sport of boxing was not in her blood to quit. Not only did she fight for her country, but in the United States, she was an icon to women fighters of all ages, always inspired the younger female fighters to follow their dreams and focus on who they wanted to be. This kept her going to the next level of her career.
					</p>
					<p>
						With the help of her trainer, simon and her new sparring partner, Jennifer, she was able to continue her career without any interuptions, only to get stronger and better. The more she remembered her love ones, Rob and Rick, the memories of them pushed her to continue following her dreams and vowed of dedicating the fights to them.
					</p>
					<p>
						Rosalinda was yet to continue to stay a champion and after having her revenge with Sara, the ex-sparring partner, she was able to look forward to her next challengers that were calling out to her, but the most challenging fight was yet to come... A third rematch with the Brazilian and a fighter from Australia, as she waited for a chance to win her third belt.
					</p>
                    <strong>
                        <em>"Protect Yourself at all times."</em>
                    </strong>
					<p>
						<strong
							style={{
								display: 'inline-block',
								marginBottom: 5
							}}
						>
							Buy Now:
						</strong>
						<ul className="tags flex" style={{ marginTop: 0 }}>
							<li>
								<a
									href="https://www.amazon.com/Proud-Be-Me-Rosalinda-Part/dp/1648956297/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1642090624&sr=8-1"
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
									href="https://www.barnesandnoble.com/w/proud-to-be-me-rosalinda-jesse-moreno/1140505769?ean=9781648956294"
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
						</ul>
					</p>
				</Post>
			</div>
		</Layout>
	);
};

export default Book3;
