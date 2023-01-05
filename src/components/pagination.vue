<template id="pagination-template">
  <div class="pager">
    <ul class="pagination">
        <li 
        class="pagination-item"
        >
        <button 
            type="button" 
            @click="onClickFirstPage"
            :disabled="isInFirstPage"
            aria-label="Go to first page"
            class="item prev"
        >
            &#8810;
        </button>
        </li>
        <li
        class="pagination-item"
        >
        <button 
            type="button" 
            @click="onClickPreviousPage"
            :disabled="isInFirstPage"
            aria-label="Go to previous page"
            class="item prev"
        >
            &lt;
        </button>
        </li>
        <li v-for="(page, index) in pages" :key="index" class="pagination-item">
        <button 
            type="button" 
            @click="onClickPage(page.name)"
            :disabled="page.isDisabled"
            :class="{ active: isPageActive(page.name) }"
            :aria-label="`Go to page number ${page.name}`"
            class="item"
        >
            {{ page.name }}
        </button>
        </li>
        <li class="pagination-item">
        <button 
            type="button" 
            @click="onClickNextPage"
            :disabled="isInLastPage"
            aria-label="Go to next page"
            class="item next"
        >
            &gt;
        </button>
        </li>
        <li class="pagination-item">
        <button 
            type="button" 
            @click="onClickLastPage"
            :disabled="isInLastPage"
            aria-label="Go to last page"
            class="item next"
        >
            &#8811;
        </button>
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
        props: {
            maxVisibleButtons: {
                type: Number,
                required: false,
                default: 3
            },
            totalPages: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            perPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
        },
    },
    computed: {
        startPage() {
            if (this.currentPage === 1) {
                return 1;
            }

            if (this.currentPage === this.totalPages) { 
                if(this.totalPages - this.maxVisibleButtons <= 0){
                    return 1;
                }
                return this.totalPages - this.maxVisibleButtons + 1;
            }

                return this.currentPage - 1;
        },
        endPage() {
        
            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        
        },
        pages() {
            const range = [];

            for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
                range.push({
                name: i,
                isDisabled: i === this.currentPage 
                });
            }

            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickFirstPage() {
        this.$emit('pagechanged', 1);
        },
        onClickPreviousPage() {
        this.$emit('pagechanged', this.currentPage - 1);
        },
        onClickPage(page) {
        this.$emit('pagechanged', page);
        },
        onClickNextPage() {
        this.$emit('pagechanged', this.currentPage + 1);
        },
        onClickLastPage() {
        this.$emit('pagechanged', this.totalPages);    
        },
        isPageActive(page) {
        return this.currentPage === page;
        },
    }
  }
</script>

<style>
    .pager {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
    .pager button{
        border : 0;
        cursor: pointer;
    }
    .pager .pagination {
    list-style-type: none;
    }

    .pager .pagination-item {
    display: inline-block;
    }

    .pager .active {
    background-color: red;
    color: #ffffff;
    }
</style>
