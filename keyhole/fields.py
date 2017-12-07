from django.forms import ImageField
from .widgets import CroppedImageWidget


class CroppedImageField(ImageField):
    default_validators = []  # explicitly exclude validate_image_file_extension

    def __init__(self, *args, **kwargs):
        height = kwargs.pop("height", 200)
        width = kwargs.pop("width", 200)
        self.widget = CroppedImageWidget(width=width, height=height)
        super(ImageField, self).__init__(*args, **kwargs)
