'use strict';

/**
 * Board Service
 */
function BoardService()
{
	var _canvas  = document.getElementById('board');
	var _context = _canvas.getContext('2d');

	return {

		init: function()
		{
			this.test();
		},

		test: function()
		{
			var line = {
				x: 420,
				y: 40,
				w: 20,
				cap: 'round',
				color: '#3D3'
			};			

			var position = {
				x: 40,
				y: 40
			};

			this.addLine(line, position);
		},

		/**
		 * add line to board
		 * @param Line line object
		 * @param Position position object
		 */
		addLine: function(line, position)
		{
			_context.beginPath();
			
			_context.moveTo(position.x, position.y);
			_context.lineTo(line.x, line.y);

			if(line.hasOwnProperty('w')) _context.lineWidth = line.w;
			if(line.hasOwnProperty('cap')) _context.lineCap = line.cap;
			if(line.hasOwnProperty('color')) _context.strokeStyle = line.color;

			_context.stroke();
		},

		add: function(item)
		{
			console.log('add item', item);
		}
	};
};

angular
	.module('app.services')
	.service('Board', [BoardService]);