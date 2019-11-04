# dropdown-hover

Bootstrap's compatible display on hover for dropdown menus. **Simple to use** doesn't interfere with the already *onclick* dropdown for bootstrap.

## Download/Install
* NPM: ` npm i dropdown-hover `
* [Download Zip](https://github.com/Quickinline/dropdown-hover/master/dropdown-hover.zip)

## How to use

Here's an example of a regular **dropdown button** that triggers a **dropdown-menu** by **click**
```
<div class="dropdown ">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
                Dropdown
            </button>
    <div class="dropdown-menu" aria-labelledby="triggerId">
        <button class="dropdown-item" href="#">Action</button>
        <button class="dropdown-item disabled" href="#">Disabled action</button>
    </div>
</div>

```

all you have to do is add the classes:
* **dropdown-hover** to *dropdown*
* **dropdown-hover-menu** to *dropdown-menu*

so that after the edit it should look like this

```
<div class="dropdown dropdown-hover ">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
                Dropdown
            </button>
    <div class="dropdown-menu  dropdown-hover-menu " aria-labelledby="triggerId">
        <button class="dropdown-item" href="#">Action</button>
        <button class="dropdown-item disabled" href="#">Disabled action</button>
    </div>
</div>

```