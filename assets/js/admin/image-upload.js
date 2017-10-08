export default function() {
	var featuredImageWrap = document.querySelectorAll('.custom-media-upload');

	if ( featuredImageWrap.length === 0 ) {
		return;
	}

	[].map.call( featuredImageWrap, function(item) {
		// var ImageWrapId = item.attribute.id;
		var removeImage = item.querySelector('.remove-image');
		var replaceImage = item.querySelector('.replace-image');
		var setImage = item.querySelector('.set-image');
		var featuredImageTag = item.querySelector('a.replace-image img');
		var featuredImageID = item.querySelector('input[type="hidden"]');
		var mediaFrame = wp.media({
			title: 'Choose Media',
			button: {
				text: 'Use Selected Media'
			},
			multiple: false
		});

		mediaFrame.on('select', function() {
			var attachment = mediaFrame.state().get('selection').first().toJSON();

			item.classList.toggle('has-image');
			featuredImageID.value = attachment.id;
			if (attachment.hasOwnProperty('sizes')) {
				featuredImageTag.setAttribute('src', attachment.sizes.thumbnail.url);
			} else {
				featuredImageTag.setAttribute('src', attachment.icon);
			}

		});

		removeImage.addEventListener('click', function(event) {
			event.preventDefault();
			item.classList.toggle('has-image');
			featuredImageTag.setAttribute('src', '');
			featuredImageID.val('');
		});

		replaceImage.addEventListener('click', function(event) {
			event.preventDefault();
			mediaFrame.open();
		});

		setImage.addEventListener('click', function(event) {
			event.preventDefault();
			mediaFrame.open();
		});
	});
};
