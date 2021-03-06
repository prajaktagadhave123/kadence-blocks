/**
 * BLOCK: Kadence Column
 *
 * Registering a basic block with Gutenberg.
 */

/**
 * Import Icons
 */
import icons from '../../icons';
/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	ColorPalette,
	InspectorControls,
} = wp.editor;
const {
	TabPanel,
	Dashicon,
	PanelBody,
	RangeControl,
} = wp.components;

function kadenceHexToRGB( hex, alpha ) {
	hex = hex.replace( '#', '' );
	const r = parseInt( hex.length === 3 ? hex.slice( 0, 1 ).repeat( 2 ) : hex.slice( 0, 2 ), 16 );
	const g = parseInt( hex.length === 3 ? hex.slice( 1, 2 ).repeat( 2 ) : hex.slice( 2, 4 ), 16 );
	const b = parseInt( hex.length === 3 ? hex.slice( 2, 3 ).repeat( 2 ) : hex.slice( 4, 6 ), 16 );
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}
/**
 * Register: a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'kadence/column', {
	title: __( 'Column' ),
	icon: icons.blockColumn,
	category: 'common',
	parent: [ 'kadence/rowlayout' ],
	attributes: {
		id: {
			type: 'number',
			default: 1,
		},
		topPadding: {
			type: 'number',
			default: '',
		},
		bottomPadding: {
			type: 'number',
			default: '',
		},
		leftPadding: {
			type: 'number',
			default: '',
		},
		rightPadding: {
			type: 'number',
			default: '',
		},
		topPaddingM: {
			type: 'number',
			default: '',
		},
		bottomPaddingM: {
			type: 'number',
			default: '',
		},
		leftPaddingM: {
			type: 'number',
			default: '',
		},
		rightPaddingM: {
			type: 'number',
			default: '',
		},
		topMargin: {
			type: 'number',
			default: '',
		},
		bottomMargin: {
			type: 'number',
			default: '',
		},
		topMarginM: {
			type: 'number',
			default: '',
		},
		bottomMarginM: {
			type: 'number',
			default: '',
		},
		leftMargin: {
			type: 'number',
			default: '',
		},
		rightMargin: {
			type: 'number',
			default: '',
		},
		leftMarginM: {
			type: 'number',
			default: '',
		},
		rightMarginM: {
			type: 'number',
			default: '',
		},
		zIndex: {
			type: 'number',
			default: '',
		},
		background: {
			type: 'string',
			default: '',
		},
		backgroundOpacity: {
			type: 'number',
			default: 1,
		},
	},
	edit: props => {
		const { attributes: { id, topPadding, bottomPadding, leftPadding, rightPadding, topPaddingM, bottomPaddingM, leftPaddingM, rightPaddingM, topMargin, bottomMargin, topMarginM, bottomMarginM, leftMargin, rightMargin, leftMarginM, rightMarginM, backgroundOpacity, background, zIndex }, setAttributes } = props;
		const mobileControls = (
			<PanelBody
				title={ __( 'Mobile Padding/Margin' ) }
				initialOpen={ false }
			>
				<h2>{ __( 'Mobile Padding (px)' ) }</h2>
				<RangeControl
					label={ icons.outlinetop }
					value={ topPaddingM }
					className="kt-icon-rangecontrol kt-top-padding"
					onChange={ ( value ) => {
						setAttributes( {
							topPaddingM: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					label={ icons.outlineright }
					value={ rightPaddingM }
					className="kt-icon-rangecontrol kt-right-padding"
					onChange={ ( value ) => {
						setAttributes( {
							rightPaddingM: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					label={ icons.outlinebottom }
					value={ bottomPaddingM }
					className="kt-icon-rangecontrol kt-bottom-padding"
					onChange={ ( value ) => {
						setAttributes( {
							bottomPaddingM: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					label={ icons.outlineleft }
					value={ leftPaddingM }
					className="kt-icon-rangecontrol kt-left-padding"
					onChange={ ( value ) => {
						setAttributes( {
							leftPaddingM: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<h2>{ __( 'Mobile Margin (px)' ) }</h2>
				<RangeControl
					label={ icons.outlinetop }
					value={ topMarginM }
					className="kt-icon-rangecontrol kt-top-margin"
					onChange={ ( value ) => {
						setAttributes( {
							topMarginM: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
				<RangeControl
					label={ icons.outlineright }
					value={ rightMarginM }
					className="kt-icon-rangecontrol kt-right-margin"
					onChange={ ( value ) => {
						setAttributes( {
							rightMarginM: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
				<RangeControl
					label={ icons.outlinebottom }
					value={ bottomMarginM }
					className="kt-icon-rangecontrol kt-bottom-margin"
					onChange={ ( value ) => {
						setAttributes( {
							bottomMarginM: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
				<RangeControl
					label={ icons.outlineleft }
					value={ leftMarginM }
					className="kt-icon-rangecontrol kt-left-margin"
					onChange={ ( value ) => {
						setAttributes( {
							leftMarginM: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
			</PanelBody>
		);
		const deskControls = (
			<PanelBody
				title={ __( 'Padding/Margin' ) }
				initialOpen={ true }
			>
				<h2>{ __( 'Padding (px)' ) }</h2>
				<RangeControl
					label={ icons.outlinetop }
					value={ topPadding }
					className="kt-icon-rangecontrol kt-top-padding"
					onChange={ ( value ) => {
						setAttributes( {
							topPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					label={ icons.outlineright }
					value={ rightPadding }
					className="kt-icon-rangecontrol kt-right-padding"
					onChange={ ( value ) => {
						setAttributes( {
							rightPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					label={ icons.outlinebottom }
					value={ bottomPadding }
					className="kt-icon-rangecontrol kt-bottom-padding"
					onChange={ ( value ) => {
						setAttributes( {
							bottomPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					label={ icons.outlineleft }
					value={ leftPadding }
					className="kt-icon-rangecontrol kt-left-padding"
					onChange={ ( value ) => {
						setAttributes( {
							leftPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<h2>{ __( 'Margin (px)' ) }</h2>
				<RangeControl
					label={ icons.outlinetop }
					value={ topMargin }
					className="kt-icon-rangecontrol kt-top-margin"
					onChange={ ( value ) => {
						setAttributes( {
							topMargin: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
				<RangeControl
					label={ icons.outlineright }
					value={ rightMargin }
					className="kt-icon-rangecontrol kt-right-margin"
					onChange={ ( value ) => {
						setAttributes( {
							rightMargin: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
				<RangeControl
					label={ icons.outlinebottom }
					value={ bottomMargin }
					className="kt-icon-rangecontrol kt-bottom-margin"
					onChange={ ( value ) => {
						setAttributes( {
							bottomMargin: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
				<RangeControl
					label={ icons.outlineleft }
					value={ leftMargin }
					className="kt-icon-rangecontrol kt-left-margin"
					onChange={ ( value ) => {
						setAttributes( {
							leftMargin: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
			</PanelBody>
		);
		const tabControls = (
			<TabPanel className="kt-inspect-tabs"
				activeClass="active-tab"
				tabs={ [
					{
						name: 'desk',
						title: <Dashicon icon="desktop" />,
						className: 'kt-desk-tab',
					},
					{
						name: 'mobile',
						title: <Dashicon icon="smartphone" />,
						className: 'kt-mobile-tab',
					},
				] }>
				{
					( tab ) => {
						let tabout;
						if ( tab.name ) {
							if ( 'mobile' === tab.name ) {
								tabout = mobileControls;
							} else {
								tabout = deskControls;
							}
						}
						return <div>{ tabout }</div>;
					}
				}
			</TabPanel>
		);
		const backgroundString = ( background ? kadenceHexToRGB( background, backgroundOpacity ) : 'transparent' );
		return (
			<div className={ `kadence-column inner-column-${ id }` } >
				<InspectorControls>
					<h2>{ __( 'Background Color' ) }</h2>
					<ColorPalette
						value={ background }
						onChange={ ( value ) => setAttributes( { background: value } ) }
					/>
					<RangeControl
						label={ __( 'Background Opacity' ) }
						value={ backgroundOpacity }
						onChange={ ( value ) => {
							setAttributes( {
								backgroundOpacity: value,
							} );
						} }
						min={ 0 }
						max={ 1 }
						step={ 0.01 }
					/>
					<RangeControl
						label={ __( 'Z Index Control' ) }
						value={ zIndex }
						onChange={ ( value ) => {
							setAttributes( {
								zIndex: value,
							} );
						} }
						min={ -200 }
						max={ 200 }
					/>
					{ tabControls }
				</InspectorControls>
				<div className="kadence-inner-column-inner" style={ {
					paddingLeft: leftPadding + 'px',
					paddingRight: rightPadding + 'px',
					paddingTop: topPadding + 'px',
					paddingBottom: bottomPadding + 'px',
					marginLeft: leftMargin + 'px',
					marginRight: rightMargin + 'px',
					marginTop: topMargin + 'px',
					marginBottom: bottomMargin + 'px',
					zIndex: zIndex,
					background: backgroundString,
				} } >
					<InnerBlocks templateLock={ false } />
				</div>
			</div>
		);
	},

	save( { attributes } ) {
		const { id, background, backgroundOpacity } = attributes;
		const backgroundString = ( background ? kadenceHexToRGB( background, backgroundOpacity ) : undefined );
		return (
			<div className={ `inner-column-${ id }` }>
				<div className={ 'kt-inside-inner-col' } style={ {
					background: backgroundString,
				} } >
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
	deprecated: [
		{
			attributes: {
				id: {
					type: 'number',
					default: 1,
				},
			},
			save: ( { attributes } ) => {
				const { id } = attributes;
				return (
					<div className={ `inner-column-${ id }` }>
						<div className={ 'kt-inside-inner-col' } >
							<InnerBlocks.Content />
						</div>
					</div>
				);
			},
		},
		{
			attributes: {
				id: {
					type: 'number',
					default: 1,
				},
			},
			save: ( { attributes } ) => {
				const { id } = attributes;
				return (
					<div className={ `inner-column-${ id }` }>
						<InnerBlocks.Content />
					</div>
				);
			},
		},
	],
} );
