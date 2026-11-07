//extended standard
define({
	frontpage:
	{
		pic:'UI/frontpage.png',
		bg_color:'#000000'
	},
	frontpage_dialog:
{
bg:'UI/frontpage_dialog_bg.png',
pic:'UI/frontpage_dialog.png',
    x:418, y:340, width:500, height:300,
    item:
    [   //x,  y,   w,   h
         [120, 73, 250, 40], //versus
         [120, 133, 250, 40], //network
         [120, 193, 250, 40]  //control 
    ]
},
	
	settings:
	{
		pic:'UI/settings.png',
		bg_color:'#000000',
		leftmost_column_bg_color:'#404040',
		leftmost_column_text_color:'#ffffff',
		ok_button:
		{
			pic:'UI/ok_button.png',
			x:550, y:430, width:151, height:26,
			item:[[0,0,151,26]]
		}
	},
	network_game:
	{
		bg_color:'#000000'
	},
	panel:
	{
		pic:'UI/panel.png',
		x: 5, y: 6,
		hpx: 52, hpy: 17, hpw: 103, hph: 7, mpx: 52, mpy: 35, mpw: 103, mph: 4,
		hp_light:'#ff91919d', hp_bright: '#FF0000', hp_dark: '#6f081f', mp_bright: '#0000FF', mp_dark: '#1f086f',
		pane_width:166, pane_height:53,
		width:1335, height:128
	},
	message_overlay:
	{
		pic:'UI/message_overlay.png',
		//      x, y, w, h
		pause:[ 0, 0,82,21],
		demo: [82, 0,70,21],
		loading:[152,0,125,21]
	},
	character_selection:
	{
      pic:'UI/character_selection.png',
		bg_color:'#000',
		// 8 slots horizontal, canvas 794px wide
		// slot width=90, gap=4, start x=4 → posx[i] = 4 + i*94
		box_width:145, box_height:290,
		posx:[ 21, 185, 349, 513, 677, 841, 1005, 1169 ],
		// posy[0] = top of SPRITE inside slot (below the labels ~40px)
		posy:[ 67 ],
		// label height (tidak dipakai lagi)
		label_height: 0,
		// character grid below slots
		// slots end at y=4+80=84, textboxes 3×14=42 → grid starts ~130
		grid_top: 430,
		grid_left: 75,
		grid_width: 1200,
		thumb_size: 60,
		waiting: { pic:'UI/press_attack_to_join.png' },
		random: { pic:'UI/random.png' },
		numbers: { pic:'UI/12345.png' },
		
      text:
		{	//      blink1    blink2    static    computer
			color:['#a50000','#ffafaf','#ffffff','#ff9b9b'],
			box_width:90, box_height:14
		}
	},
	how_many_computer_players:
	{
		bg:'UI/how_many_computer_players.png',
		x:487, y:267, width:360, height:200,
		item_x:68, item_y:100, item_space:30, item_width:19, item_height:19,
		active_color:'#FFFFFF', inactive_color:'#c60000'
	},
	vs_mode_dialog:
	{
		bg:'UI/dialog1.png',
		pic:'UI/vs_mode_dialog.png',
		x:3, y:3, width:450, height:250,
		item:
		[	//x, y,  w, h
			[1,0,219,56], //Fight!85ff85
			[1,56,219,33], //Reset All
   		[1,89,219,34], //Reset Random
			[1,123,219,37], //Background
			[1,160,219,32],//Difficulty
 	  	[1,192,219,57],//Exit
		],
		text:
		[
			[221,135,113,34],//Background-textarea
			[221,168,113,34],//Difficulty-textarea
		],
		text_color: '#ffffff'
	},
	bg_preview:
	{
		// Gambar preview background ditampilkan di kanan atas layar saat memilih background
		// Ukuran & posisi thumbnail preview
		x: 890, y: 6, width: 450, height: 250,
		// Nama file gambar preview untuk setiap background (sesuai urutan id di data.js)
		// Letakkan file gambar di folder: UI/bg_preview/
		pics:
		{
      'AkatsukiCave':    'UI/bg_preview/AkatsukiCave.png',
			'AkatsukiCaveII': 'UI/bg_preview/AkatsukiCaveII.png',
			'Desert': 'UI/bg_preview/Desert.png',
			'Gate':        'UI/bg_preview/Gate.png',
			'RedMoon':     'UI/bg_preview/RedMoon.png',
			'Valley':        'UI/bg_preview/Valley.png',
			'ValleyII': 'UI/bg_preview/ValleyII.png',
			'ValleyRuins':       'UI/bg_preview/ValleyRuins.png',
			'Forest':      'UI/bg_preview/Forest.png',
			'Arena':       'UI/bg_preview/Arena.png',
			'RamenPlace':  'UI/bg_preview/RamenPlace.png',
			'Springs':     'UI/bg_preview/Springs.png',
        // 'Academy':     'UI/bg_preview/Academy.png',
			'CastleRoof':  'UI/bg_preview/CastleRoof.png',
			//'Valley':      'UI/bg_preview/Valley.png',
			'Grassland':   'UI/bg_preview/Grassland.png',
			'Amegakure':        'UI/bg_preview/ame.png',
			
         'Training':     'UI/bg_preview/training.png'
		}
	},
	summary:
	{
		width:490,
		pic:'UI/summary.png',
		//     x,  y,  w, h
		head: [0,  0,490,59],
		body: [0, 59,490,46],
		foot: [0,105,490,31],
		icon: [12, 0, 40,45],
		time: [427,4, 50,18],
		time_color: '#ffffff',
		//                Name         Kill         Attack         HP Lost        MP Usage       Picking        Status  (lose)
		text:       [[45,0,50,46],[97,10,59,24],[161,10,59,24],[225,10,59,24],[289,10,59,24],[353,10,59,24],[417,10,59,24]],
		text_color: [  '#ffffff',   '#ffaaaa',    '#ffaaaa',     '#f0f0aa',     '#f0f0aa',     '#aaf5aa',     '#85ff85','#ff9898']
	}
});
