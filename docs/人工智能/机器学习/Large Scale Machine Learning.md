## Stochastic Gradient Descent

> Use 1 example in each iteration

$cost(\theta,x^{(i)},y^{(i)})=\frac12(h_{\theta}(x^{(i)})-y^{(i)})^2$

1. Randomly shuffle(reorder) training examples
2. Repeat{
		for $i:=1,...,m${
		$\theta_j:=\theta_j-\alpha(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)}$
		(for every $j=0,...,n$)
		}
}

## Mini-batch Gradient Descent

> Use $b$ examples in each iteration

Say $b=10,m=1000$.

Repeat{
		for $i:=1,11,21,31,...,991${
		$\theta_j:=\theta_j-\alpha\frac1{10}\sum\limits_{k=i}^{i+9}(h_\theta(x^{(k)})-y^{(k)})x_j^{(k)}$
		(for every $j=0,...,n$)
		}
}

## Stochastic Gradient Descent Convergence

### Checking for convergence

Batch gradient descent:
- Plot $J_{train}(\theta)$ as a function of the number of iterations of gradient descent.
- $J_{train}(\theta)=\frac1{2m}\sum\limits_{i=1}^m(h_{\theta}(x^{(i)})-y^{(i)})^2$

StochasQc gradient descent:
- $cost(\theta,x^{(i)},y^{(i)})=\frac12(h_{\theta}(x^{(i)})-y^{(i)})^2$
-  During learning, compute $cost(\theta,x^{(i)},y^{(i)})$ before updating $\theta$ using $(x^{(i)},y^{(i)})$.
-   Every 1000 iterations (say), plot $cost(\theta,x^{(i)},y^{(i)})$ averaged over the last 1000 examples processed by algorithm.

## Online Learning

**e.g. 1**

Shipping service website where user comes, specifies origin and destination, you offer to ship their package for some asking price, and users someQmes choose to use your shipping service $(y=1)$ , sometimes not $(y=0)$.
Features $x$ capture properties of user, of origin/destination and asking price. We want to learn $p(y=1|x;\theta)$ to optimize price.

**e.g. 2**

Product search (learning to search)  
User searches for “Android phone 1080p camera” Have 100 phones in store. Will return 10 results.
$x=$ features of phone, how many words in user query match name of phone, how many words in query match description of phone, etc.
$y=1$ if user clicks on link. $y=0$ otherwise. 
Learn $p(y=1|x;\theta)$.
Use to show user the 10 phones they’re most likely to click on.

**e.g. ...**

Other examples: Choosing special offers to show user; customized selection of news arQcles; product recommendation; ...

## Map-reduce and data parallelism

Many learning algorithms can be expressed as computing sums of functions over the training set.