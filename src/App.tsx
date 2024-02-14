import React, { useState } from 'react';
import {
	Box,
	Button,
	createTheme,
	Grid,
	ThemeProvider,
	Typography,
} from '@mui/material';
import { purple, red, pink } from '@mui/material/colors';
import wave from './resources/pochacco_wave.gif';
import nervous from './resources/pochacco_nervous.gif';
import sad from './resources/pochacco_sad.gif';
import sweating from './resources/pochacco_sweating.gif';
import heart from './resources/pochacco_heart.gif';
import angry from './resources/pochacco_angry.gif';
import yay from './resources/pochacco_yay.gif';
import tired from './resources/pochacco_tired.gif';
import './App.css';

const theme = createTheme({
	palette: {
		secondary: {
			main: purple[200],
			dark: purple[800],
		},
		error: {
			main: red[400],
			dark: red[800],
		},
		success: {
			main: pink[200],
			dark: pink[600],
		},
	},
});

enum IMAGE {
	NERVOUS = 0,
	WAVE = 1,
	SAD = 2,
	SWEATING = 3,
	HEART = 4,
	ANGRY = 5,
	YAY = 6,
	TIRED = 7,
}

const image_list = [nervous, wave, sad, sweating, heart, angry, yay, tired];

function App() {
	const [yesText, setYesText] = useState('Yes');
	const [bigText, setBigText] = useState('');
	const [valentineText, setValentineText] = useState('');
	const [noText, setNoText] = useState('No');
	const [img, setImg] = useState(IMAGE.WAVE);
	const [text, setText] = useState('Can I ask you a question...?');
	const [showNoButton, setShowNoButton] = useState(true);
	const [yesTextFontStyle, setYesTextFontStyle] = useState('normal');
	const [disableNoButton, setDisableNoButton] = useState(false);
	type NoStyle = {
		fontWeight: number;
		fontSize: string | null;
	};
	const defaultNoStyle: NoStyle = {
		fontWeight: 700,
		fontSize: null,
	};
	const [noStyles, setNoStyles] = useState(defaultNoStyle);
	const [img_size, setImgSize] = useState('250px');
	type YesStyle = {
		textTransform: string | null;
		bgcolor: string | null;
		'&:hover': {
			bgcolor: string | null;
			backgroundRepeat: string | null;
			border: string | null;
			cursor: string | null;
			overflow: string | null;
			outline: string | null;
			boxShadow: string | null;
		};
		whiteSpace: string;
		backgroundRepeat: string | null;
		border: string | null;
		cursor: string | null;
		overflow: string | null;
		outline: string | null;
		boxShadow: string | null;
	};
	const defaultYesStyle: YesStyle = {
		textTransform: 'none',
		bgcolor: 'secondary.light',
		'&:hover': {
			bgcolor: 'secondary.main',
			backgroundRepeat: null,
			border: null,
			cursor: null,
			overflow: null,
			outline: null,
			boxShadow: null,
		},
		whiteSpace: 'nowrap',
		backgroundRepeat: null,
		border: null,
		cursor: null,
		overflow: null,
		outline: null,
		boxShadow: null,
	};
	const [yesStyles, setYesStyles] = useState(defaultYesStyle);
	const defaultNoButtonStyles: YesStyle = {
		bgcolor: null,
		'&:hover': {
			bgcolor: null,
			backgroundRepeat: null,
			border: null,
			cursor: null,
			overflow: null,
			outline: null,
			boxShadow: null,
		},
		textTransform: 'none',
		whiteSpace: 'nowrap',
		backgroundRepeat: null,
		border: null,
		cursor: null,
		overflow: null,
		outline: null,
		boxShadow: null,
	};
	const invisibleNoButton: YesStyle = {
		textTransform: 'none',
		'&:hover': {
			bgcolor: 'transparent',
			backgroundRepeat: 'no-repeat',
			border: 'none',
			cursor: 'none',
			overflow: 'hidden',
			outline: 'none',
			boxShadow: 'none',
		},
		whiteSpace: 'nowrap',
		bgcolor: 'transparent',
		backgroundRepeat: 'no-repeat',
		border: 'none',
		cursor: 'none',
		overflow: 'hidden',
		outline: 'none',
		boxShadow: 'none',
	};
	const [noButtonStyles, setNoButtonStyles] = useState(defaultNoButtonStyles);

	const noButtonFiller = img === IMAGE.HEART ? <Box /> : <div />;

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				spacing={1}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: '100vh' }}
			>
				<Grid item xs={3}>
					<img
						src={image_list[img]}
						alt="cute doggo"
						width={img_size}
					/>
				</Grid>
				<Grid item xs={3}>
					<Typography display="inline">{text}</Typography>
					<Typography display="inline" fontWeight={800}>
						{bigText}
					</Typography>
					{valentineText ? (
						<Typography
							display="inline"
							sx={{
								fontSize: '120px',
								fontFamily: 'Great Vibes',
								color: '#FF9BD2',
								textShadow: 'pink 1px 0px 5px',
							}}
						>
							{valentineText}
						</Typography>
					) : (
						<div />
					)}
				</Grid>
				<Grid item xs={3}>
					<Grid
						container
						direction="row"
						spacing={6}
						justifyContent="space-between"
						pt="10px"
						alignItems="center"
					>
						<Grid item xs={6} justifyContent="center">
							<Button
								variant="contained"
								sx={yesStyles}
								size="medium"
								onClick={() => {
									switch (img) {
										case IMAGE.SAD:
											setImg(IMAGE.WAVE);
											setYesText('Fine 💅');
											setNoText(
												'this is the wrong button'
											);
											setDisableNoButton(true);
											setShowNoButton(true);
											setNoStyles({
												fontWeight: 500,
												fontSize: '0.9rem',
											});
											setText(
												"Can I ask you a question? I promise it's "
											);
											setBigText('IMPORTANT!');
											setYesTextFontStyle('normal');
											break;
										case IMAGE.WAVE:
											setImg(IMAGE.NERVOUS);
											setText('Will you... 😳👉👈');
											setYesText('Go on... 🕒');
											setNoText('');
											setDisableNoButton(false);
											setNoStyles(defaultNoStyle);
											setShowNoButton(false);
											setBigText('');
											setYesTextFontStyle('normal');
											break;
										case IMAGE.NERVOUS:
											setImg(IMAGE.SWEATING);
											setText('Be my... 🥹');
											setYesText(
												'Where are you going with this? 😒'
											);
											setNoText('');
											setDisableNoButton(false);
											setShowNoButton(true);
											setNoStyles(defaultNoStyle);
											setShowNoButton(false);
											setBigText('');
											setYesTextFontStyle('normal');
											break;
										case IMAGE.SWEATING:
											setImg(IMAGE.HEART);
											setText('');
											setValentineText('Valentine?');
											setImgSize('500px');
											setYesText('❤️ Yes! ❤️');
											setYesStyles({
												...yesStyles,
												bgcolor: 'success.main',
												'&:hover': {
													bgcolor: 'success.dark',
													backgroundRepeat: null,
													border: null,
													cursor: null,
													overflow: null,
													outline: null,
													boxShadow: null,
												},
											});
											setNoText(
												'🤡 no i just think of you as a friend 🤡'
											);
											setShowNoButton(true);
											setDisableNoButton(false);
											setNoStyles(defaultNoStyle);
											setBigText('');
											setYesTextFontStyle('normal');
											break;
										case IMAGE.HEART:
											setImg(IMAGE.YAY);
											setText(
												"Yay! 🥰 Happy Valentine's Day Elina!\nThank you for being my Valentine again this year.\n" +
													"It's unfortunate we weren't able to see each other today but I can't wait to see you on the weekend!"
											);
											setValentineText('');
											setImgSize('500px');
											setYesText('extra tid bits 😮');
											setYesStyles(defaultYesStyle);
											setNoText('');
											setShowNoButton(false);
											setDisableNoButton(false);
											setNoStyles(defaultNoStyle);
											setBigText('');
											setYesTextFontStyle('normal');
											break;
										case IMAGE.YAY:
											setImg(IMAGE.TIRED);
											setText(
												"I have to say, this took a lot longer to do than I expected; coding everything from scratch 🙂 It was actually pretty fun to make this but I'm super tired now so I really hope you like it! 😘"
											);
											setValentineText('');
											setImgSize('250px');
											setYesText('da code →');
											setYesStyles(defaultYesStyle);
											setNoText('');
											setShowNoButton(false);
											setDisableNoButton(false);
											setNoStyles(defaultNoStyle);
											setBigText('');
											setYesTextFontStyle('normal');
											break;
										case IMAGE.TIRED:
											window.location.href =
												'https://github.com/simonlee9504/simonlee9504.com/blob/valentines-2024/src/App.tsx';
											break;
									}
								}}
							>
								<Typography
									fontWeight={700}
									fontStyle={yesTextFontStyle}
								>
									<span>{yesText}</span>
								</Typography>
							</Button>
						</Grid>
						{showNoButton ? (
							<Grid item xs={6} justifyContent="center">
								<Button
									disabled={disableNoButton}
									variant="contained"
									sx={noButtonStyles}
									size="medium"
									color="error"
									onClick={() => {
										switch (img) {
											case IMAGE.WAVE:
												setImg(IMAGE.SAD);
												setYesText('reconsider');
												setShowNoButton(false);
												setText('');
												setYesTextFontStyle('italic');
												break;
										}
									}}
									onMouseOver={() => {
										if (img === IMAGE.HEART) {
											setNoButtonStyles(
												invisibleNoButton
											);
											setNoText(
												'((: no i just think of you as a friend :))'
											);
											setImg(IMAGE.ANGRY);
											setImgSize('400px');
										}
									}}
									onMouseLeave={() => {
										if (
											img === IMAGE.HEART ||
											img === IMAGE.ANGRY
										) {
											setNoButtonStyles(
												defaultNoButtonStyles
											);
											setNoText(
												'🤡 no i just think of you as a friend 🤡'
											);
											setImg(IMAGE.HEART);
											setImgSize('500px');
										}
									}}
								>
									<Typography sx={noStyles}>
										{noText}
									</Typography>
								</Button>
							</Grid>
						) : (
							noButtonFiller
						)}
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
